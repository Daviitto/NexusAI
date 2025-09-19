import { Outlet } from "react-router-dom";
import { SiderMenu } from "../components/SiderMenu";

export function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SiderMenu />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
