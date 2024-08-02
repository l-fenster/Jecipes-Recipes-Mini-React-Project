import { useState } from "react";
import RecipeData from "../recipes.json";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteItem = (recipeId) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== recipeId);

    setRecipes(filteredRecipes);
  };

  return (
    <div className="recipeList">
      <h2>List of Recipes</h2>

      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          clickToDelete={deleteItem}
        />
      ))}
    </div>
  );
}

export default RecipeList;
