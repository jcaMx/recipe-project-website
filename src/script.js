// Recipe data with consistent formatting
const recipes = {
    adobo: {
        title: "Pork Adobo",
        content: `
            <strong>Ingredients:</strong><br>
            - 1 kg pork, cut into pieces<br>
            - 1/2 cup soy sauce<br>
            - 1/2 cup vinegar (white or cane)<br>
            - 1 head garlic, minced<br>
            - 1 tsp black peppercorns<br>
            - 3 bay leaves<br>
            - 1 cup water<br>
            - 2 tbsp cooking oil<br><br>
            
            <strong>Steps:</strong><br>
            1. Sauté garlic in oil until golden.<br>
            2. Add pork and cook until lightly browned.<br>
            3. Pour in soy sauce, vinegar, water, peppercorns, and bay leaves.<br>
            4. Simmer for 30-40 minutes until pork is tender.<br>
            5. Serve hot with rice.
        `
    },
    tinola: {
        title: "Chicken Tinola",
        content: `
            <strong>Ingredients:</strong><br>
            - 1 kg chicken, cut into pieces<br>
            - 2 cups chayote (or green papaya), sliced<br>
            - 1 cup moringa leaves (malunggay)<br>
            - 1 thumb ginger, julienned<br>
            - 4 cloves garlic, minced<br>
            - 1 onion, sliced<br>
            - 2 tbsp fish sauce (patis)<br>
            - 6 cups water<br>
            - 2 tbsp cooking oil<br><br>
            
            <strong>Steps:</strong><br>
            1. Sauté garlic, onion, and ginger in oil until fragrant.<br>
            2. Add chicken and cook until lightly browned.<br>
            3. Pour in water and fish sauce, then simmer for 25 minutes.<br>
            4. Add chayote/papaya and cook until tender.<br>
            5. Stir in moringa leaves, then serve hot.
        `
    },
    sinigang: {
        title: "Pork Sinigang",
        content: `
            <strong>Ingredients:</strong><br>
            - 1 kg pork ribs, cut into chunks<br>
            - 1 packet tamarind soup base (sinigang mix)<br>
            - 2 cups radish (labanos), sliced<br>
            - 1 cup string beans (sitaw), cut<br>
            - 2 cups water spinach (kangkong)<br>
            - 1 onion, sliced<br>
            - 2 tomatoes, quartered<br>
            - 6 cups water<br>
            - Fish sauce to taste<br><br>
            
            <strong>Steps:</strong><br>
            1. Boil pork in water until tender (30 mins).<br>
            2. Add onions, tomatoes, and sinigang mix; simmer for 10 mins.<br>
            3. Add radish and string beans; cook until soft.<br>
            4. Stir in kangkong and season with fish sauce.<br>
            5. Serve hot with rice.
        `
    }
};

// Modal functions with improved handling
function openModal(recipeKey) {
    const recipe = recipes[recipeKey];
    const modal = document.getElementById("modal");
    
    document.getElementById("modal-title").textContent = recipe.title;
    document.getElementById("modal-content").innerHTML = recipe.content;
    
    // Show modal with smooth transition
    modal.classList.remove("hidden");
    setTimeout(() => {
        modal.classList.add("opacity-100");
    }, 10);
}

function closeModal() {
    const modal = document.getElementById("modal");
    
    // Hide modal with smooth transition
    modal.classList.remove("opacity-100");
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300);
}

// Event listeners for all recipe buttons
document.addEventListener("DOMContentLoaded", () => {
    // Add click handlers to all elements with class 'recipe-btn'
    document.querySelectorAll('.recipe-btn').forEach(button => {
        button.addEventListener('click', function() {
            const recipeKey = this.getAttribute('data-recipe');
            openModal(recipeKey);
        });
    });
});