import logo from "../assets/recipe-book.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Jecipe's Recipes</h1>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
