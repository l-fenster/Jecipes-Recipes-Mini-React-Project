import logo from "../assets/recipe-book.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/new");
  };
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <h1>Jecipe's Recipes</h1>
      <button onClick={handleNavigate}>Add your own Recipe!</button>
    </div>
  );
};

export default Navbar;
