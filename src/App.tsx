import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import NavbarGuest from "./components/navbar/NavbarGuest";
import FooterGuest from "./pages/FooterGuest";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import ContactInfo from "./pages/ContactInfo";
function App() {
  function ConditionalNavbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return isHome ? <Navbar /> : <NavbarGuest />;
  }

  function ConditionalFooter() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return isHome ? <></> : <FooterGuest />;
  }

  return (
    <>
      <BrowserRouter>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<ContactInfo />}></Route>
        </Routes>
        <ConditionalFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
