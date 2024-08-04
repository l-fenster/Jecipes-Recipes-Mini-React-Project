import { useNavigate } from "react-router-dom";
import cupcakeImg from "../assets/404-cupcake.png";

export default function NotFound() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        gap: "50px",
      }}
    >
      <img src={cupcakeImg} alt="Page Not Found" width={600} height="auto" />
      <button onClick={handleNavigate}>Return to Homepage</button>
    </div>
  );
}
