// initialize variables
let saveIngredientButton = document.querySelector('.save-ingredient');
// creates array of existing ingredients divs
let ingredientsBoxes = [];


// adds ingredient to unordered list
function addIngredient() {

    // save ingredient name (value of user input)
    let inputIngredient = document.querySelector(".ingredient");
    let ingredient = inputIngredient.value;

    // clears ingredient input box for next entry
    inputIngredient.value = '';
    let currentBox = [];
    ingredientsBoxes.forEach(box => {
        if (box.classList[0] === dropdown.value) {
            currentBox = box;
        }
    })
    let currentUl = currentBox.childNodes[0];

    // add ingredient to current ingredients list
    let li = document.createElement('li');
    li.textContent = ingredient;
    currentUl.appendChild(li);
}

// create div and ul  for ingredients with recipe name as class name
// called from addRecipe
function createIngredientBox(nameOfRecipe) {

    // this is div element that has ingredients ul/li in it, tied to recipe name
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

function ingredientInstruction() {
    const instructions = document.querySelector('div.add-ingredients h3');
    instructions.textContent = 'Add ingredients for: ';
    instructions.textContent += dropdown.value;

}