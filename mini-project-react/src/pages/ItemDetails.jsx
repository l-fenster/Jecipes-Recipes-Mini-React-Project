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
import { useParams, Navigate, useNavigate } from "react-router-dom";

export default function ItemDetails({ recipeData, editRecipe }) {
  const { recipeId } = useParams();
  const foundRecipe = recipeData.find((recipe) => recipe.id === recipeId);

  const handleEditNavigate = () => {
    navigate(`/${foundRecipe.id}/edit`);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/recipesPage");
  };

  if (!foundRecipe) {
    return <Navigate to="/error" />;
  }
  return (
    <div>
      <div className="recipe-wrapper">
        <div className="recipe card">
          <img
            src={foundRecipe.image}
            alt={`${foundRecipe.name} recipe image`}
            width={300}
            height="auto"
            style={{ borderRadius: "50%" }}
          />
          <h2>{foundRecipe.name}</h2>
          {foundRecipe.calories !== "hide" && (
            <p>Calories: {foundRecipe.calories}</p>
          )}
          {foundRecipe.servings !== "hide" && (
            <p>Servings: {foundRecipe.servings}</p>
          )}
        </div>
        <button onClick={handleEditNavigate} className="btn-edit">
          Edit Recipe
        </button>
      </div>
      <button onClick={handleNavigate}>Return to Recipes</button>
    </div>
  );
}
