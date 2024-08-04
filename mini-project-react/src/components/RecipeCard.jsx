import React from "react";
import { Link, useNavigate } from "react-router-dom";

function RecipeCard({ recipe, clickToDelete }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${recipe.id}/edit`);
  };

  return (
    <div className="RecipeCard">
      <Link to={`/itemDetails/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={`${recipe.name}`}
          width={100}
          height="auto"
        />
        <h3>{recipe.name}</h3>
        <p>Calories: {recipe.calories}</p>
        <p>Servings: {recipe.servings}</p>

        {recipe.calories <= 200 ? (
          <p>Delicious Low Calorie Recipe!</p>
        ) : (
          <p>Delicious Recipe!</p>
        )}
      </Link>

      <button onClick={handleNavigate} className="btn-edit">
        Edit Recipe
      </button>

      <button onClick={() => clickToDelete(recipe.id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default RecipeCard;
