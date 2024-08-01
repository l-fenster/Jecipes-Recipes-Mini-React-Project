import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";

//pages
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="main">
          <Sidebar />
        </div>
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/itemDetails" element={<ItemDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
} //recipe list only on dashboard

export default App;
