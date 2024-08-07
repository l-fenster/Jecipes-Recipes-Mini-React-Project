import { useNavigate } from "react-router-dom";
import jecipe from "../assets/jecipe.png";
import potOfFood from "../assets/pot.png";

export default function StartPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/recipesPage");
  };

  return (
    <div className="start">
      <div className="jecipe-button">
        <div className="jecipe-text">
          <h1>Hi I'm Jecipe!</h1>
          <h2>Welcome to my recipe page!</h2>
        </div>
        <button onClick={handleNavigate}>
          <img
            src={potOfFood}
            alt="pot of delicious food"
            width="50%"
            height="50%"
          />
        </button>
      </div>

      <img className="jecipe" src={jecipe} alt="jecipe" />
    </div>
  );
}
