import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/recipesPage");
  };
  return (
    <div>
      <h1>About this Project</h1>
      <p>
        We wanted to create a custom webpage for our frog chef friend, Jecipe,
        to upload his favorite recipes. Jecipe has already uploaded a few of his
        best recipes, which you can see on the Recipes page. Please upload your
        favorite recipes to the Jecipe's Recipes collection.
      </p>
      <h2>Team Members</h2>
      <ul>
        <li></li>
      </ul>
      <button onClick={handleNavigate}>Return to Recipes</button>
    </div>
  );
}
