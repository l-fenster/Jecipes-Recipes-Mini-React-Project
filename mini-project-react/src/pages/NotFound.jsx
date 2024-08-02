import { useNavigate } from "react-router-dom";

const imgURL = "../assets/not-found.png";

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
      <img
        src={imgURL}
        alt="Page Not Found"
        width={600}
        height="auto"
        style={{ filter: "invert(1)" }}
      />
      <button onClick={handleNavigate}>Return to Homepage</button>
    </div>
  );
}
