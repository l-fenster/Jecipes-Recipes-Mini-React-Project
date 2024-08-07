import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import defaultFoodImage from "../assets/food.png";

export default function AddRecipe({ createRecipe }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/recipesPage");
  };

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

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

    const newId = uuidv4();
    console.log(newId);

    const image = img || defaultFoodImage;

    const newRecipe = { id: newId, name, image, calories, servings };

    createRecipe(newRecipe);

    setName("");
    setImg("");
    setCalories("");
    setServings("");

    handleNavigate();
  };

  return (
    <div>
      <h1>Add your own Recipe!</h1>
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
      <button onClick={handleNavigate}>Return to Recipes</button>
    </div>
  );
}
