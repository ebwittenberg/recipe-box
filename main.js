// Event listeners
submit.addEventListener('click', recipeName);
saveIngredientButton.addEventListener('click', addIngredient);
// look for change in dropdown menu
dropdown.addEventListener('change', hideIngredients);
dropdown.addEventListener('change', ingredientInstruction);
submit.addEventListener('click', ingredientInstruction);