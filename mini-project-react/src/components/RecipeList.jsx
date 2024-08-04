import { useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipeData, editRecipe, deleteItem }) {
  const [category, setCategory] = useState("");

  const handleCategoryFilter = (e) => {
    setCategory(e.target.value);
  };

  const filteredRecipes = category
    ? recipeData.filter((recipe) => {
        if (category === "low-calorie") {
          return recipe.calories <= 200;
        } else {
          return recipe.category === category;
        }
      })
    : recipeData;

  return (
    <div className="recipeList">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h5>Filter Recipes:</h5>
        <div className="category-select-wrapper">
          <select onChange={handleCategoryFilter}>
            <option value="">Show All Recipes</option>
            <option value="low-calorie">Show Low Calorie Recipes</option>
          </select>
        </div>
      </div>
      <div className="recipeCardContainer">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            clickToEdit={editRecipe}
            clickToDelete={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
