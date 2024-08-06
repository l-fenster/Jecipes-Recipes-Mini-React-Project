import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/recipesPage");
  };

  return (
    <div>
      <h1>Hi I'm Jecipe!</h1>
      <h1>Welcome to my recipe page!</h1>
      <button onClick={handleNavigate}>See Recipes!</button>
    </div>
  );
}
