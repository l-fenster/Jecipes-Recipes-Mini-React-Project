import { useNavigate } from "react-router-dom";
import raspberries from "../assets/raspberries.jpeg";
import thakali from "../assets/thakali.jpg";
import cremeBrulee from "../assets/creme-brulee.jpeg";
export default function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/recipesPage");
  };
  return (
    <div className="about-text">
      <h1 className="page-heading">About this Project</h1>
      <div className="about-p">
        <p>
          We wanted to create a custom webpage for our frog chef friend, Jecipe,
          to upload his favorite recipes. Jecipe has already uploaded a few of
          his best recipes, which you can see on the Recipes page. Please upload
          your favorite recipes to the Jecipe's Recipes collection.
        </p>
      </div>
      <h2>Team Members</h2>
      <ul className="about-list">
        <li>
          <div className="about-box">
            <a href="https://github.com/l-fenster" target="_blank">
              <img
                src={raspberries}
                alt="raspberries"
                width={100}
                height="auto"
              />
            </a>
            <h3>Leah Fenster</h3>
            <p>Leah's favorite food is raspberries!</p>
          </div>
        </li>
        <li>
          <div className="about-box">
            <a href="https://github.com/woodspc" target="_blank">
              <img
                src={cremeBrulee}
                alt="creme brulee"
                width={100}
                height="auto"
              />
            </a>
            <h3>Peter Woods</h3>
            <p>Peter's favorite food is creme brulee!</p>
          </div>
        </li>
        <li>
          <div className="about-box">
            <a href="https://github.com/prashidhika" target="_blank">
              <img src={thakali} alt="thakali" width={100} height="auto" />
            </a>
            <h3>Prashidhika Neupane</h3>
            <p>Prashi's favorite food is thakali!</p>
          </div>
        </li>
      </ul>
      <button className="return-btn" onClick={handleNavigate}>
        Return to Recipes
      </button>
    </div>
  );
}
