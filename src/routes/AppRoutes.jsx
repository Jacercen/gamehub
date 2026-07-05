import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import GameDetails from "../pages/GameDetails/GameDetails";
import Favorites from "../pages/Favorites/Favorites";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
