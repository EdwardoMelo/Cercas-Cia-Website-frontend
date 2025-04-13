import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";




const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produto/:id" element={<AboutUs />} />
          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;