import { Routes,Route } from "react-router-dom";
import { HomeChat } from "../pages/HomeChat";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeChat />} />
     
    </Routes>
  );
}