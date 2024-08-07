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
        } else if (category === "vegetarian") {
          return recipe.vegetarian === true;
        } else if (category === "vegetarian-lowCal") {
          return recipe.vegetarian === true && recipe.calories <= 200;
        } else if (category === "dessert") {
          return recipe.dessert === true;
        } else {
          return recipe.category === category;
        }
      })
    : recipeData;

  return (
    <div className="recipeList">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* <h5>Filter Recipes:</h5> */}
        <div className="category-select-wrapper">
          <select className="category-select" onChange={handleCategoryFilter}>
            <option value="">Show All Recipes</option>
            <option value="low-calorie">Show Low Calorie Recipes</option>
            <option value="vegetarian">Show Vegetarian Recipes</option>
            <option value="vegetarian-lowCal">
              Show Low Calorie Vegetarian Recipes
            </option>
            <option value="dessert">Show Dessert Recipes</option>
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
