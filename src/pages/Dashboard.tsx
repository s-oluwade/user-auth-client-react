import React from "react";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome! You are logged in.</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
