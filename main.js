let body = document.querySelector('body');

let submit = document.querySelector('.submit-button');
submit.addEventListener('click', recipeName);

let dropdown = document.querySelector('.recipe-dropdown');

// save ingredients user enters in a unordered list
let saveIngredientButton = document.querySelector('.save-ingredient');

saveIngredientButton.addEventListener('click', addIngredient);

// adds ingredient to unordered list
function addIngredient() {

    // save ingredient name (value of user input)
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

    // add ul as child element of ingredients div
    ingredientsBox.appendChild(ingredientsList);
}

// look for change in dropdown menu

dropdown.addEventListener('change', hideIngredients);

function hideIngredients() {
    // show only the ingredient div where class name = dropdown.value
    // loop through array of ingredients boxes
    ingredientsBoxes.forEach(box => {
        // if specific ingredient box does not match current dropdown menu's value, hide that ingredient box
        if (box.classList.contains(dropdown.value)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    })

}
dropdown.addEventListener('change', ingredientInstruction);
submit.addEventListener('click', ingredientInstruction);

function ingredientInstruction() {
    const instructions = document.querySelector('div.add-ingredients h3');
    instructions.textContent = 'Add ingredients for: ';
    instructions.textContent += dropdown.value;

}