/*import RecipeCard from "./RecipeCard";

function RecipeList({ recipeData, deleteItem }) {
  return (
    <div className="recipeList">
      <h2>List of Recipes</h2>
      <ul>
        {recipeData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            clickToDelete={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;*/

import RecipeCard from "./RecipeCard";

function RecipeList({ recipeData, editRecipe, deleteItem }) {
  return (
    <div className="recipeList">
      <h2>List of Recipes</h2>
      <div className="recipeCardContainer">
        {recipeData.map((recipe) => (
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
