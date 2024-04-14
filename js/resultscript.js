function makeCocktail() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let selectedIngredients = [];
    
    checkboxes.forEach((checkbox) => {
        selectedIngredients.push(checkbox.nextElementSibling.textContent.trim());
    });

    if (selectedIngredients.length === 0) {
        showToast('No ingredients selected. Please select at least one alcohol and one mixer.');
        return;
    }

    let cocktailName = determineCocktail(selectedIngredients);
    localStorage.setItem('cocktailName', cocktailName);
    window.location.href = 'result.html';
}

function determineCocktail(ingredients) {
    const cocktailMap = {
        'Tequila,Cola': 'Mexicola',
        'Almond,Lemon': 'Amaretto Sour',
        'Vodka,Whiskey,Orange': 'Black Eyed Susan',
        'Tequila,Tomato': 'Bloody Maria',
        'Vodka,Tomato': 'Bloody Mary',
        'Almond,Orange': 'Bocce Ball',
        'Champagne,Bitters': 'Champagne Cocktail',
        'Champagne,Brandy,Orange': 'Champagne Pick-Me-Up',
        'Rum,Chocolate': 'Chocolate Mint Rum',
        'Tequila,Coconut': 'Coconut Margarita',
        'Rum,Coconut,Mint': 'Coconut Mojito',
        'Vodka,Mint,Bitters,Orange': 'Flying Tiger',
        'Tequila,Orange,Bitters': 'Freddy Fudpucker',
        'Brandy,Almond': 'French Connection',
        'Vodka,Raspberry,Pineapple': 'French Martini',
        'Vodka,Gin,Tequila,Orange': 'Gentle Ben',
        'Gin,Dry Vermouth': 'Gibson',
        'Gin,Sweet Vermouth': 'Gin & It',
        'Gin,Orange': 'Gin & Orange Juice',
        'Gin,Tonic': 'Gin and Tonic',
        'Gin,Lemon,Ginger Ale': 'Gin Buck',
        'Gin,Ginger Ale': 'Gin Highball',
        'Gin,Lime,Soda': 'Gin Rickey',
        'Whiskey,Lime,Beer': 'Kentucky Mule',
        'Raspberry,Champagne': 'Kir Royale',
        'Rum,Sweet Vermouth,Dry Vermouth,Bitters': 'Latin Manhattan',
        'Whiskey,Lemon': 'Hot Toddy',
        'Brandy,Lemon,Sugar': 'Sidecar',
        'Lemon,Sugar,Soda': 'Lemon Squash',
        'Vodka,Lemon,Sugar,Soda': 'Long Vodka',
        'Gin,Lemon,Sugar': 'Maid In Cuba',
        'Whiskey,Sweet Vermouth,Bitters': 'Manhattan',
        'Whiskey': 'Whiskey',
        'Tequila': 'Tequila',
        'Vodka,Orange': 'Screwdriver',
        'Rum,Lime,Sugar': 'Daiquiri',
        'Whiskey,Sweet Vermouth,Bitters': 'Manhattan',
        'Gin,Dry Vermouth': 'Martini',
        'Vodka,Lime,Beer': 'Moscow Mule',
        'Chocolate,Bitters': 'Peppermint Pattie',
        'Whiskey,Sweet Vermouth,Dry Vermouth,Bitters': 'Perfect Manhattan',
        'Tequila,Pineapple,Lime,Soda': 'Pineapple Paloma',
        'Whiskey,Ginger Ale,Soda': 'Presbyterian',
        'Whiskey,Sweet Vermouth,Bitters': 'Rob Roy',
        'Rum,Orange': 'Rum & Orange Juice',
        'Rum,Pineapple': 'Rum & Pineapple Juice',
        'Rum,Cola': 'Rum and Coke',
        'Rum,Tonic': 'Rum and Tonic',
        'Gin,Lemon,Sugar': 'Rusty Nail',
        'Vodka,Bitters,Orange': 'Harvey Wallbanger',
        'Vodka,Sloeberry,Orange': 'Sloe Comfortable Screw',
        'Sloeberry,Orange': 'Sloe Driver',
        'Vodka,Sloeberry,Orange': 'Sloe Screw',
        'Vodka,Orange': 'Screwdriver',
        'Whiskey,Lemon Lime': 'Seven & Seven',
        'Vodka,Sloeberry,Orange': 'Sloe Comfortable Screw',
        'Sloeberry Liqueur,Orange': 'Sloe Driver',
        'Vodka,Sloeberry,Orange': 'Sloe Screw',
        'Brandy,Bitters': 'Stinger',
        'Tequila,Vermouth Sweet,Bitters': 'Tequila Manhattan',
        'Tequila,Vermouth Dry': 'Tequini',
        'Whiskey,Almond Liqueur': 'The Godfather',
    };

    let possibleCocktails = [];

    for (let recipe in cocktailMap) {
        let ingredientsNeeded = recipe.split(',');
        if (ingredientsNeeded.every(ing => ingredients.includes(ing))) {
            possibleCocktails.push(cocktailMap[recipe]);
        }
    }

    const uniqueCocktails = [...new Set(possibleCocktails)];

    return uniqueCocktails.length > 0 ? uniqueCocktails.join(', ') : 'No cocktails found for selected ingredients';
}


function toggleModal() {
    var modal = document.getElementById('IngRefGuide');
    modal.style.display = (modal.style.display === 'none' ? 'block' : 'none');
}

window.onclick = function(event) {
    var modal = document.getElementById('IngRefGuide');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    toastContainer.appendChild(toast);
    setTimeout(() => { toast.classList.add('show'); }, 100);

    setTimeout(() => { toast.classList.remove('show'); }, 3000);
    setTimeout(() => { toastContainer.removeChild(toast); }, 3500);
}
