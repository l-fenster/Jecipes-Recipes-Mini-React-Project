import { useNavigate } from "react-router-dom";
import jecipe from "../assets/jecipe.png";

export default function StartPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/recipesPage");
  };

  return (
    <div>
      <h1>Hi I'm Jecipe!</h1>
      <h2>Welcome to my recipe page!</h2>
      <div className="jecipe-button">
        <img src={jecipe} alt="jecipe" />
        <button onClick={handleNavigate}>See Recipes!</button>
      </div>
    </div>
  );
}
