import { Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import Offer from "../pages/Offer";
import Profile from "../pages/Profile";

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}
