import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import defaultFoodImage from "../assets/cooking.jpeg";
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
  const [instructions, setInstructions] = useState(
    Object.values(foundRecipe.instructions)
  );
  const [vegetarian, setVegetarian] = useState(foundRecipe.vegetarian || false);
  const [dessert, setDessert] = useState(foundRecipe.dessert || false);

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
  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };
  const handleAddInstruction = () => {
    if (instructions.length < 6) {
      setInstructions([...instructions, ""]);
    }
  };
  const handleRemoveInstruction = (index) => {
    const newInstructions = instructions.filter((_, i) => i !== index);
    setInstructions(newInstructions);
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
      vegetarian,
      dessert,
      instructions: instructions.reduce(
        (accumulator, currentValue, instructionIndex) => {
          accumulator[`step${instructionIndex + 1}`] = currentValue;
          return accumulator;
        },
        {}
      ),
    };
    editRecipe(editedRecipe);
    navigate("/recipesPage");
  };
  return (
    <div className="editRecipe">
      <div className="edit">
        <div className="edit-box">
          <h1 className="page-heading">Edit Recipe</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
              <label>Image URL:</label>
              <input
                type="text"
                name="img"
                value={img}
                onChange={handleImgChange}
              />

              <label>Calories:</label>
              <input
                type="number"
                name="calories"
                value={calories}
                onChange={handleCaloriesChange}
              />

              <label>Servings:</label>
              <input
                type="number"
                name="servings"
                value={servings}
                onChange={handleServingsChange}
              />
            </div>
            <div className="radio">
              <label>Vegetarian:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="vegetarian"
                    value="true"
                    checked={vegetarian === true}
                    onChange={() => setVegetarian(true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="vegetarian"
                    value="false"
                    checked={vegetarian === false}
                    onChange={() => setVegetarian(false)}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="radio">
              <label>Dessert:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="dessert"
                    value="true"
                    checked={dessert === true}
                    onChange={() => setDessert(true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="dessert"
                    value="false"
                    checked={dessert === false}
                    onChange={() => setDessert(false)}
                  />
                  No
                </label>
              </div>
            </div>

            {/* {instructions.length < 6 && (
              <button type="button" onClick={handleAddInstruction}>
                Add Instruction Step
              </button>
            )} */}
            <button className="edit-save" type="submit">
              Save
            </button>
            <div className="instructions-steps-edit">
              <h3>Instructions:</h3>
              {instructions.length < 6 && (
                <button
                  className="instructions-btn"
                  type="button"
                  onClick={handleAddInstruction}
                >
                  Add Instruction Step
                </button>
              )}
            </div>
            {instructions.map((instruction, index) => (
              <div className="input-wrapper" key={index}>
                <label>Step {index + 1}:</label>
                <input
                  className="edit-step-input"
                  type="text"
                  name={`step${index + 1}`}
                  value={instruction}
                  onChange={(e) =>
                    handleInstructionChange(index, e.target.value)
                  }
                />
                <button
                  className="edit-remove"
                  type="button"
                  onClick={() => handleRemoveInstruction(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            {/* {instructions.length < 6 && (
              <button type="button" onClick={handleAddInstruction}>
                Add Step
              </button>
            )} */}
            {/* <button type="submit">Save</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}
//make an option to edit the recipe instructions  by viewing each <li> in instructions as their own input field
//also add a button to add a <li>
//there can only be a maximum of 6 <li> in this <ul>, so in the edit recipe page, the user will see 6 input fields. Any empty input fields will be empty <li></li>
//also add a button for <li> to delete that <li>
//for AddRecipe:
//make all new recipe cards automatically have <h3>Instructions:<h3>
//There will be 6 input fields which each represent a <li> in the <ul>. There can only be a maximum of 6 <li> in the <ul>
//Any empty input fields will be empty <li></li> in the <ul>
//when the user hits save, these instructions input fields will be created as an unordered list inside itemDetails
