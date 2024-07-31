import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar />
        <RecipeList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
