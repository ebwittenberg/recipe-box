// returns user entered recipe name
function recipeName() {
    // save recipe name (value of user input)
    let inputRecipeName = document.querySelector(".name");
    let recipeName = inputRecipeName.value;
    
    // clears recipe name input box for next entry
    inputRecipeName.value = '';

    // calls add recipe function, passing it the recipe name
    addRecipe(recipeName);
}
// after user enters recipe name, populate that recipe name into dropdown menu
function addRecipe(recipeName) {

    // create new option element that will go into dropdown
    let option = document.createElement('option');
    // text content of option is the recipe name
    option.textContent = recipeName;
    option.classList.add(recipeName);
    // append the recipe name option into the dropdown
    dropdown.appendChild(option);

    createIngredientBox(recipeName);
}

