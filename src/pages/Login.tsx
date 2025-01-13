import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/components/login-form";
import login from "../lib/AuthService";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (formData: unknown) => {
    // Mock login
    console.log("login form suubmitted. \n", formData);
    login(email, password)
     .then((res) => {
        localStorage.setItem("auth", "true");
        navigate("/dashboard");
      })
     .catch((error) => {
        console.error("Error logging in:", error);
        alert("Invalid credentials");
      });
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
