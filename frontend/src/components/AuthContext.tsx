import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
interface AuthContextType {
  isAuthenticated: boolean;
  token:string|null;
  loading:boolean;
  login: (token:string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false); // ✅ Finish loading after checking localStorage
  }, []);

  const isAuthenticated = !!token;
  /*const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // ✅ Check if token exists when app loads
    return !!localStorage.getItem('token');
  });*/

  const login = (newToken:string) => {
    //setIsAuthenticated(true);
    localStorage.setItem('token', newToken);
    setToken(newToken);
  }
  const logout = async () => {
  const email = localStorage.getItem('userEmail'); // ← store on login
  if (email) {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, { email });
    } catch (err) {
      console.error("Logout log error:", err);
    }
  }
  localStorage.removeItem('token');
  localStorage.removeItem('userEmail');
  toast({
    className: "bg-white text-black",
    title: "Logged Out",
    description: "You have been logged out successfully.",
  });
  setToken(null);
  //setIsAuthenticated(false);
};

  return (
    <AuthContext.Provider value={{ isAuthenticated,token,loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
export default AuthContext;