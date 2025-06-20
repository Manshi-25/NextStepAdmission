import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // ✅ Check if token exists when app loads
    return !!localStorage.getItem('token');
  });

  const login = () => setIsAuthenticated(true);
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
  setIsAuthenticated(false);
};

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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