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
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import StartPage from "./pages/StartPage";

function App() {
  const [recipes, setRecipes] = useState(RecipeInfo);

  const deleteItem = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const editRecipe = (editedRecipe) => {
    const editedRecipes = recipes.map((recipe) =>
      recipe.id === editedRecipe.id ? editedRecipe : recipe
    );

    setRecipes(editedRecipes);
  };
  //change all instances of route / to /recipesPage
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
        <Route path="/" element={<StartPage />} />
        <Route
          path="/recipesPage"
          element={<Dashboard recipeData={recipes} deleteItem={deleteItem} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/itemDetails/:recipeId"
          element={<ItemDetails recipeData={recipes} />}
        />
        <Route
          path="/new"
          element={<AddRecipe createRecipe={createRecipe} />}
        />
        <Route
          path="/:recipeId/edit"
          element={<EditRecipe recipes={recipes} editRecipe={editRecipe} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
} //recipe list only on dashboard

export default App;
