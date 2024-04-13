function makeCocktail() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let selectedIngredients = [];
    
    checkboxes.forEach((checkbox) => {
        selectedIngredients.push(checkbox.nextElementSibling.textContent.trim());
    });

    if (selectedIngredients.length === 0) {
        showToast('No ingredients selected. Please select at least one alcohol and one mixer.');
        return; // Exit the function without redirecting
    }

    let cocktailName = determineCocktail(selectedIngredients);
    localStorage.setItem('cocktailName', cocktailName);
    window.location.href = 'result.html';
}

function determineCocktail(ingredients) {
    if (ingredients.includes('Tequila') && ingredients.includes('Cola')) {
        return 'Mexicola';
    }
    // Add more combinations as needed
    return 'No cocktail found for selected ingredients';
}

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    toastContainer.appendChild(toast);
    // Show the toast
    setTimeout(() => { toast.classList.add('show'); }, 100);

    // Hide the toast after 3 seconds
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
    // Remove the toast from DOM after it's hidden
    setTimeout(() => { toastContainer.removeChild(toast); }, 3500);
}
