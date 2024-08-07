import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import defaultFoodImage from "../assets/cooking.jpeg";
export default function AddRecipe({ createRecipe }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/recipesPage");
  };
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [instructions, setInstructions] = useState({ step1: "" });
  const [vegetarian, setVegetarian] = useState(false);
  const [dessert, setDessert] = useState(false);

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
  const handleInstructionChange = (e, step) => {
    setInstructions({ ...instructions, [step]: e.target.value });
  };
  const handleAddInstruction = () => {
    const newStep = `step${Object.keys(instructions).length + 1}`;
    setInstructions({ ...instructions, [newStep]: "" });
  };
  const handleRemoveInstruction = (step) => {
    const { [step]: _, ...rest } = instructions;
    setInstructions(rest);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !calories || !servings) {
      alert("Please fill in all fields");
      return;
    }
    const newId = uuidv4();
    const image = img || defaultFoodImage;
    const newRecipe = {
      id: newId,
      name,
      image,
      calories,
      servings,
      vegetarian,
      dessert,
      instructions,
    };
    createRecipe(newRecipe);
    setName("");
    setImg("");
    setCalories("");
    setServings("");
    setVegetarian(false);
    setDessert(false);
    setInstructions({ step1: "" });
    handleNavigate();
  };
  return (
    <div>
      <div className="edit-add">
        <div className="edit-box-add">
          <h1 className="page-heading">Add your own Recipe!</h1>
          <form>
            <div className="input-wrapper-add">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="input-wrapper-add">
              <label>Image URL:</label>
              <input
                type="text"
                name="img"
                value={img}
                onChange={handleImgChange}
              />
            </div>
            <div className="input-wrapper-add">
              <label>Calories:</label>
              <input
                type="number"
                name="calories"
                value={calories}
                onChange={handleCaloriesChange}
              />
            </div>
            <div className="input-wrapper-add">
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

            <div className="input-wrapper-add">
              {/* {Object.keys(instructions).length < 6 && (
            <button type="button" onClick={handleAddInstruction}>
              Add Instruction Step
            </button>
          )} */}
              <button className="add-save" type="submit" onClick={handleSubmit}>
                Save
              </button>
              <button className="add-return" onClick={handleNavigate}>
                Return to Recipes
              </button>
              <div className="instructions-steps-add">
                <h3>Instructions:</h3>
                {Object.keys(instructions).length < 6 && (
                  <button
                    className="add-instructions-btn"
                    type="button"
                    onClick={handleAddInstruction}
                  >
                    Add Instruction Step
                  </button>
                )}
              </div>
              {Object.keys(instructions).map((step, index) => (
                <div key={step} className="instruction-wrapper">
                  <label>Step {index + 1}:</label>
                  <input
                    type="text"
                    name={step}
                    value={instructions[step]}
                    onChange={(e) => handleInstructionChange(e, step)}
                  />
                  {index >= 0 && (
                    <button
                      className="add-remove"
                      type="button"
                      onClick={() => handleRemoveInstruction(step)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              {/* {Object.keys(instructions).length < 6 && (
            <button type="button" onClick={handleAddInstruction}>
              Add Instruction
            </button>
          )} */}
            </div>
            {/* <button type="submit" onClick={handleSubmit}>
          Save
        </button> */}
          </form>
          {/* <button onClick={handleNavigate}>Return to Recipes</button> */}
        </div>
      </div>
    </div>
  );
}
