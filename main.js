
// saves the recipe name in a variable
function recipeName() {
    // save recipe name (value of user input)
    let inputRecipeName = document.querySelector(".name");
    let recipeName = inputRecipeName.value;
    
    // clears recipe name input box for next entry
    inputRecipeName.value = '';

    // calls add recipe function, passing it the recipe name
    addRecipe(recipeName);
}

// when submit button is clicked, run recipeName function
let submit = document.querySelector('.submit-button');

submit.addEventListener('click', recipeName);

// after user enters recipe name, populate that recipe name into dropdown menu

let dropdown = document.querySelector('.recipe-dropdown');

function addRecipe(recipeName) {

    // create new option element that will go into dropdown
    let option = document.createElement('option');
    // text content of option is the recipe name
    option.textContent = recipeName;
    // append the recipe name option into the dropdown
    dropdown.appendChild(option);
}

// prompt user to add ingregients

let addIngredientsButton = document.querySelector('.add-ingredients');

addIngredientsButton.addEventListener('click', addIngredients);

// 
function addIngredients() {

}