// Recipe data
const recipes = {
    adobo: {
        title: "Pork Adobo",
        content: `
            Ingredients:
            - 1 kg chicken, cut into pieces \n
            - 1/2 cup soy sauce /n
            - 1/2 cup vinegar (white or cane) /n
            - 1 head garlic, minced /n
            - 1 tsp black peppercorns /n
            - 3 bay leaves \n
            - 1 cup water \n
            - 2 tbsp cooking oil \n

            Steps:
            1. Sauté garlic in oil until golden. \n
            2. Add chicken and cook until lightly browned.\n
            3. Pour in soy sauce, vinegar, water, peppercorns, and bay leaves.
            4. Simmer for 30-40 minutes until chicken is tender.
            5. Serve hot with rice.
        `
    },
    tinola: {
        title: "Chicken Tinola",
        content: `
            Ingredients:
            - 1 kg chicken, cut into pieces
            - 2 cups chayote (or green papaya), sliced
            - 1 cup moringa leaves (malunggay)
            - 1 thumb ginger, julienned
            - 4 cloves garlic, minced
            - 1 onion, sliced
            - 2 tbsp fish sauce (patis)
            - 6 cups water
            - 2 tbsp cooking oil

            Steps:
            1. Sauté garlic, onion, and ginger in oil until fragrant.
            2. Add chicken and cook until lightly browned.
            3. Pour in water and fish sauce, then simmer for 25 minutes.
            4. Add chayote/papaya and cook until tender.
            5. Stir in moringa leaves, then serve hot.
        `
    },
    sinigang: {
        title: "Pork Sinigang",
        content: `
            Ingredients:
            - 1 kg pork ribs, cut into chunks
            - 1 packet tamarind soup base (sinigang mix)
            - 2 cups radish (labanos), sliced
            - 1 cup string beans (sitaw), cut
            - 2 cups water spinach (kangkong)
            - 1 onion, sliced
            - 2 tomatoes, quartered
            - 6 cups water
            - Fish sauce to taste

            Steps:
                1. Boil pork in water until tender (30 mins).
                2. Add onions, tomatoes, and sinigang mix; simmer for 10 mins.
                3. Add radish and string beans; cook until soft.
                4. Stir in kangkong and season with fish sauce.
                5. Serve hot with rice.
            `
    }
};

// Modal functions
function openModal(recipeKey) {
    const recipe = recipes[recipeKey];
    document.getElementById("modal-title").textContent = recipe.title;
    document.getElementById("modal-content").textContent = recipe.content;
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Optional: Add event listeners to buttons (example HTML below)
document.addEventListener("DOMContentLoaded", () => {
    // Buttons to open modals (assuming you have buttons with IDs like "btn-adobo")
    document.getElementById("btn-adobo")?.addEventListener("click", () => openModal("adobo"));
    document.getElementById("btn-tinola")?.addEventListener("click", () => openModal("tinola"));
    document.getElementById("btn-sinigang")?.addEventListener("click", () => openModal("sinigang"));
});