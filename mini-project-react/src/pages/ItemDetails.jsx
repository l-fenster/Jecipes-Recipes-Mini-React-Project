// import React from "react";
// import { useParams, Navigate, useNavigate } from "react-router-dom";

// export default function ItemDetails({ recipeData, editRecipe }) {
//   const { recipeId } = useParams();
//   const foundRecipe = recipeData.find((recipe) => recipe.id === recipeId);

//   const handleEditNavigate = () => {
//     navigate(`/${foundRecipe.id}/edit`);
//   };

//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     navigate("/recipesPage");
//   };

//   if (!foundRecipe) {
//     return <Navigate to="/error" />;
//   }
//   return (
//     <div className="itemDetails">
//       <div className="recipe-wrapper">
//         <div className="itemBackground">
//           <div className="recipe card">
//             <img
//               src={foundRecipe.image}
//               alt={`${foundRecipe.name} recipe image`}
//               width={300}
//               height="auto"
//               style={{ borderRadius: "50%" }}
//             />
//             <h2>{foundRecipe.name}</h2>
//             {foundRecipe.calories !== "hide" && (
//               <p>Calories: {foundRecipe.calories}</p>
//             )}
//             {foundRecipe.servings !== "hide" && (
//               <p>Servings: {foundRecipe.servings}</p>
//             )}
//           </div>
//           <button onClick={handleEditNavigate} className="btn-edit">
//             Edit Recipe
//           </button>
//           <button onClick={handleNavigate}>Return to Recipes</button>
//         </div>
//       </div>
//     </div>
//   );
// }
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

  const instructions = foundRecipe.instructions ? (
    <div>
      <h3>Instructions:</h3>
      <ul className="instructions">
        {Object.values(foundRecipe.instructions).map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </div>
  ) : null;

  return (
    <div className="itemDetails">
      <div className="recipe-wrapper">
        <div className="itemBackground">
          <div className="recipe card">
            <img
              src={foundRecipe.image}
              alt={`${foundRecipe.name} recipe image`}
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h2>{foundRecipe.name}</h2>
              {foundRecipe.calories !== "hide" && (
                <p>Calories: {foundRecipe.calories}</p>
              )}
              {foundRecipe.servings !== "hide" && (
                <p>Servings: {foundRecipe.servings}</p>
              )}
            </div>
          </div>
          <div className="instructions">{instructions}</div>
          <button onClick={handleEditNavigate} className="btn-edit">
            Edit Recipe
          </button>
          <button onClick={handleNavigate}>Return to Recipes</button>
        </div>
      </div>
    </div>
  );
}
