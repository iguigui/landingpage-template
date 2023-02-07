import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/molecules/ContactUs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import WebDevelopment from "./components/pages/WebDevelopment";
import NoMatch from "./components/pages/NoMatch";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="webdevelopment" element={<WebDevelopment />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
