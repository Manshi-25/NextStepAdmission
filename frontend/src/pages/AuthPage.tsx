import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthContext';
import {toast} from "@/components/ui/use-toast";
import axios from 'axios';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isSignIn
      ? `${import.meta.env.VITE_API_URL}/api/auth/login`
      : `${import.meta.env.VITE_API_URL}/api/auth/signup`;

    try {
      const response = await axios.post(url, form);
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token); // Store token for later
        localStorage.setItem('userEmail', form.email);
        login(); // Set auth context
        toast({
          className: "bg-white text-black",
          title: isSignIn ? "Login Successful" : "Signup Successful",
          description: "Welcome!",
        });
        navigate('/'); // Redirect to home
      } else {
        toast({
          className: "bg-white text-black",
          title: "Error",
          description: response.data.message || "Something went wrong",
        });
      }
    } catch (error: any) {
      toast({
        className: "bg-white text-black",
        title: "Error",
        description: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EBEDDF] px-4 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isSignIn && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
              value={form.name}
              onChange={handleChange}
              required
            />
          
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="w-full bg-black text-white hover:bg-orange-100 hover:text-black">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isSignIn ? (
            <>
              Don't have an account?{' '}
              <button
                className="text-blue-600 underline"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                className="text-blue-600 underline"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
