import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Hero from "./pages/Hero";
import Tiles from "./pages/Tiles";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="layout" element={<Layout />} />
        <Route path="hero" element={<Hero />} />
        <Route path="tile" element={<Tiles />} />
        <Route path="card" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
