function RecipeCard(props) {
  const { recipe, clickToDelete } = props;

  return (
    <div className="RecipeCard">
      <h3>{recipe.name}</h3>
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>

      {recipe.calories <= 200 ? (
        <p>Delicious Low Calorie Recipe!</p>
      ) : (
        <p>Delicious Recipe!</p>
      )}

      <button onClick={() => clickToDelete(recipe.id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default RecipeCard;
