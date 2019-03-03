
// saves the recipe name in a variable
function recipeName() {
    // save recipe name (value of user input)
    let recipeName = document.querySelector(".name").value; 
    console.log(recipeName);
}

// when submit button is clicked, run recipeName function
let submit = document.querySelector('.submit-button');

submit.addEventListener('click', recipeName);
