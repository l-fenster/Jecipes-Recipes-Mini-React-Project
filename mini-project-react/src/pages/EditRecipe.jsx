import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import defaultFoodImage from "../assets/food.png";

export default function EditRecipe({ recipes, editRecipe }) {
  const { recipeId } = useParams();

  const foundRecipe = recipes.find((recipe) => recipe.id === recipeId);

  if (!foundRecipe) {
    return <Navigate to="/error" />;
  }

  const navigate = useNavigate(); //put this here because you will only need to navigate if you've foundStudent

  const [name, setName] = useState(foundRecipe.name);
  const [img, setImg] = useState(foundRecipe.image);
  const [calories, setCalories] = useState(foundRecipe.calories);
  const [servings, setServings] = useState(foundRecipe.servings);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImgChange = (e) => {
    setImg(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    const value = Number(e.target.value);
    if (value < 0) return;
    setCalories(value);
  };

  const handleServingsChange = (e) => {
    const value = Number(e.target.value);
    if (value < 0) return;
    setServings(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !calories || !servings) {
      alert("Please fill in all fields");
      return;
    }

    const editedRecipe = {
      id: recipeId,
      name,
      image: img ? img : defaultFoodImage,
      calories,
      servings,
    };

    editRecipe(editedRecipe);

    navigate("/recipesPage");
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form>
        <div className="input-wrapper">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Image URL:</label>
          <input
            type="text"
            name="img"
            value={img}
            onChange={handleImgChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesChange}
          />
        </div>
        <div className="input-wrapper">
          <label>Servings:</label>
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}
