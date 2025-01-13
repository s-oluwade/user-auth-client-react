import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import register from "../lib/AuthService";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Mock registration
    localStorage.setItem("user", JSON.stringify({ email, password }));
    register({email, password}).then(() => {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
      alert("Registration successful. You can now log in.");
    });
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
        className="space-y-4"
      >
        <Input title="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input title="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
