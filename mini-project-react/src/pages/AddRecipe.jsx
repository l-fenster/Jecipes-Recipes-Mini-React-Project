import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import defaultFoodImage from "../assets/food.png";
//form needs to change state in app when submitted, but don't need to handle contents in app, but rather on page

export default function AddRecipe({ createRecipe }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
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
    //we are checking that age is a number above 0 before setting age to value
  };

  const handleServingsChange = (e) => {
    const value = Number(e.target.value);
    if (value < 0) return;
    setServings(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //as we use the submit button, this will override default HTML behvaior to refresh page
    if (!name || !calories || !servings) {
      alert("Please fill in all fields");
      return;
    }

    const newId = uuidv4();

    //image URL is optional, provide default if not provided
    //if imgURL provided, then that will be used, otherwise default
    const image = img || defaultFoodImage;

    //creating a new student profile
    const newRecipe = { id: newId, name, image, calories, servings };

    //add student to students state -->state is managed in App
    createRecipe(newRecipe);

    //clear input values only after adding them to array
    setName("");
    setImg("");
    setCalories("");
    setServings("");

    //redirect user to list page
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
      <button onClick={handleNavigate}>Return to Homepage</button>
    </div>
  );
}
//form lets you add name, age, bootcamp, and image of new student
//select tag lets user pick from options in dropdown
