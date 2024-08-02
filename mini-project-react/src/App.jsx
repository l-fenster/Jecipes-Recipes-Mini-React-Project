/*import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RecipeInfo from "./recipes.json";

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
  const [recipes, setRecipes] = useState(RecipeInfo);

  const deleteItem = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="body">
          <Sidebar />
          <RecipeList />
        </div>
        <Footer />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Dashboard recipeData={recipes} deleteItem={deleteItem} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/itemDetails"
          element={<ItemDetails recipeData={recipes} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
} //recipe list only on dashboard

export default App;

/*
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
        <div className="body">
          <Sidebar />
          <RecipeList />
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

export default App;*/

import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RecipeInfo from "./recipes.json";

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
  const [recipes, setRecipes] = useState(RecipeInfo);

  const deleteItem = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="body">
          <Sidebar />
        </div>
        <Footer />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Dashboard recipeData={recipes} deleteItem={deleteItem} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/itemDetails"
          element={<ItemDetails recipeData={recipes} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
} //recipe list only on dashboard

export default App;
