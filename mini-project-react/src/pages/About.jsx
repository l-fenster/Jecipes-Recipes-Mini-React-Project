import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About this Project</h1>
      <p>!!!!!!</p>
      <h2>Team Members</h2>
      <ul>
        <li></li>
      </ul>
      <button onClick={handleNavigate}>Return to Homepage</button>
    </div>
  );
}
