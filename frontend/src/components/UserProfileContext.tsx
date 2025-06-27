import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {useAuth} from "@/components/AuthContext";
const UserProfileContext = createContext<any>(null);

export const useUserProfile = () => useContext(UserProfileContext);

export const UserProfileProvider = ({ children }) => {
  const { token,loading: authLoading } = useAuth();
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async () => {
    try {
      if (!token) return;
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/profile/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile(res.data);
    } catch (err) {
      console.error('Error fetching profile', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
     if (!authLoading && token) { // ✅ Only fetch when token is available
      fetchUserProfile();
    }
  }, [token,authLoading]);

  const updateUserProfile = async (updatedData: any) => {
    try {
      if (!token) return;
      const config = { headers: { Authorization: `Bearer ${token}` } };
      let response;

      if (updatedData instanceof FormData) { 
        config.headers['Content-Type'] = 'multipart/form-data';
        response = await axios.put(`${import.meta.env.VITE_API_URL}/api/profile/me`, updatedData, config);
      } else {
        response = await axios.put(`${import.meta.env.VITE_API_URL}/api/profile/me`, updatedData, config);
      }

      setProfile(response.data);
    } catch (err) {
      console.error('Error updating profile', err);
      throw err;
    }
  };

  return (
    <UserProfileContext.Provider value={{ profile, loading, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
