import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Outlet />
      </div>
    );
  };
  
  export default Layout;
  