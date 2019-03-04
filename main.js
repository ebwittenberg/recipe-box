let body = document.querySelector('body');
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
    option.classList.add(recipeName);
    // append the recipe name option into the dropdown
    dropdown.appendChild(option);

    createIngredientBox(recipeName);
}

// save ingredients user enters in a unordered list
let saveIngredientButton = document.querySelector('.save-ingredient');

saveIngredientButton.addEventListener('click', addIngredient);

// adds ingredient to unordered list
function addIngredient() {

    // save recipe name (value of user input)
    let inputIngredient = document.querySelector(".ingredient");
    let ingredient = inputIngredient.value;

    // clears ingredient input box for next entry
    inputIngredient.value = '';

    // add ingredient to ingredients list
    let li = document.createElement('li');
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
}

let ingredientsBoxes = [];


// create div and ul  for ingredients with recipe name as class name
function createIngredientBox(nameOfRecipe) {

    ingredientsBox = document.createElement('div');
    // give ingredients box a class name that is name of the recipe
    ingredientsBox.classList.add(nameOfRecipe);
    ingredientsBox.classList.add('ingredients-box')
    ingredientsBox.style.border = "2px solid green";
    ingredientsBox.style.height = '200px';
    body.appendChild(ingredientsBox);
    
    // add the ingredients div to ingredients boxes array
    ingredientsBoxes.push(ingredientsBox);

    ingredientsList = document.createElement('ul');
    // gives ul same class name as current dropdown value
    // ingredientsList.classList.add(dropdown.value);

    // add ul as child element of ingredients div
    ingredientsBox.appendChild(ingredientsList);
}

// look for change in dropdown menu

dropdown.addEventListener('change', hideIngredients);

function hideIngredients() {
    // show only the ingredient div where class name = dropdown.value
    // create variable for ingredients box div that has same class name as dropdown.value



}