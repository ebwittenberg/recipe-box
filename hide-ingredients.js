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