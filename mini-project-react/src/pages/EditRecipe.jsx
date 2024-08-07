import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import defaultFoodImage from "../assets/food.png";

export default function EditRecipe({ recipes, editRecipe }) {
  const { recipeId } = useParams();

  const foundRecipe = recipes.find((recipe) => recipe.id === recipeId);

  if (!foundRecipe) {
    return <Navigate to="/error" />;
  }

  const navigate = useNavigate();

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
//make an option to edit the recipe instructions as well by viewing each <li> in instructions be their own input field
//also add a button to add a <li>
//also add a button for <li> to delete that <li>

//for AddRecipe:
//make all new recipe cards automatically have <h3>Instructions:<h3>
//the user has a button (which says "Add Instruction Step") in AddRecipe that when clicked adds a new input field, which when saved will be a new list item
//the user can add up to 6 <li> (therefore up to 6 input fields)
//after the sixth input field is added, there is an alert that says "Only 6 instruction steps allowed" and no more input fields will be generated
//if there is less than six input fields again because the user deletes one, then they will again be able to add an input field
//there should also be a button next to every generated input field that allows the user to delete that input field
//when the user hits save, these instructions input fields will be created as an unordered list inside itemDetails
