import { Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import Offer from "../pages/Offer";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import CreateListing from "../pages/CreateListing";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create-listing" element={<CreateListing />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
