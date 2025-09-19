import { Routes, Route } from "react-router-dom";
import { HomeChat } from "../pages/HomeChat";
import { Layout } from "./Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeChat />} />
        
      </Route>
    </Routes>
  );
}