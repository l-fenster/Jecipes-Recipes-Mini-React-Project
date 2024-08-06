import logo from "../assets/recipe-book.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/new");
  };
  return (
    <div className="navbar">
      <div className="logo-name">
        <img src={logo} alt="logo" />
        <h1>Jecipe's Recipes</h1>
      </div>

      <button className="add-btn" onClick={handleNavigate}>
        Add your own Recipe!
      </button>
    </div>
  );
};

export default Navbar;
