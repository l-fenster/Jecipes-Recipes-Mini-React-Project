import RecipeList from "../components/RecipeList";

export default function Dashboard({ recipeData, deleteItem }) {
  return (
    <div className="body" id="recipe-list">
      <h1 className="page-heading">Recipe List</h1>
      <RecipeList recipeData={recipeData} deleteItem={deleteItem} />
    </div>
  );
}
