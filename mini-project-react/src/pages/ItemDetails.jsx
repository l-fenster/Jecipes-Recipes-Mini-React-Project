/*import React from "react";
import { useParams, Navigate } from "react-router-dom";

export default function ItemDetails({ recipeData }) {
  const foundRecipe = recipeData.filter((recipe) => recipe.id === recipeId)[0];

  if (!foundRecipe) {
    return <Navigate to="/error" />;
  }
  return (
    <div>
      <div className="recipe-wrapper">
        <div className="recipe card">
          <img
            src={foundRecipe.img}
            alt={`${foundRecipe.name} recipe image`}
            width={300}
            height="auto"
            style={{ borderRadius: "50%" }}
          />
          <h2>{foundRecipe.name}</h2>
          {showCalories !== "hide" && <p>Calories: {foundRecipe.calories}</p>}
          {showServings !== "hide" && <p>Servings: {foundRecipe.servings}</p>}
        </div>
      </div>
    </div>
  );
}*/
//item.name
//item.description

import React from "react";
import { useParams, Navigate } from "react-router-dom";

export default function ItemDetails({ recipeData }) {
  const { recipeId } = useParams();
  const foundRecipe = recipeData.find((recipe) => recipe.id === recipeId);

  if (!foundRecipe) {
    return <Navigate to="/error" />;
  }
  return (
    <div>
      <div className="recipe-wrapper">
        <div className="recipe card">
          <img
            src={foundRecipe.img}
            alt={`${foundRecipe.name} recipe image`}
            width={300}
            height="auto"
            style={{ borderRadius: "50%" }}
          />
          <h2>{foundRecipe.name}</h2>
          {showCalories !== "hide" && <p>Calories: {foundRecipe.calories}</p>}
          {showServings !== "hide" && <p>Servings: {foundRecipe.servings}</p>}
        </div>
      </div>
    </div>
  );
}
