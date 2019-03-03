
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
}

// save ingredients user enters in a unordered list
let saveIngredientButton = document.querySelector('.save-ingredient');

saveIngredientButton.addEventListener('click', addIngredient);

let ingredientList = document.querySelector('.ingredients-list')

function addIngredient() {
    // print current dropdown value to the console
    console.log(dropdown.value);

    // give ingredients list the same class name as current dropdown recipe
    ingredientList.classList.add(dropdown.value);
    // save recipe name (value of user input)
    let inputIngredient = document.querySelector(".ingredient");
    let ingredient = inputIngredient.value;

    // clears ingredient input box for next entry
    inputIngredient.value = '';

    // add ingredient to ingredients list
    let li = document.createElement('li');
    li.textContent = ingredient;
    ingredientList.appendChild(li);
}
// hide pasta ingredients list when dropdown value is not pasta
dropdown.addEventListener('change', hideIngredients);
// hide ingredients list with class name pasta


function hideIngredients() {
    let ingredientsDiv = document.querySelector('.ingredients');
    ingredientsDiv.style.position = 'absolute';
    ingredientsDiv.style.left = '-1000px';
}