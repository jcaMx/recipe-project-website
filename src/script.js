function subscribe(){
    alert("Enter a valid email");
}


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
    },
    kareKare: {
        title: "Kare-Kare",
        content: `
            <strong>Ingredients:</strong><br>
            - 1 kg oxtail or beef tripe<br>
            - 1 banana heart, sliced<br>
            - 1 bundle string beans, cut into 2-inch pieces<br>
            - 1 eggplant, sliced<br>
            - 1/2 cup peanut butter<br>
            - 1/4 cup ground toasted rice<br>
            - 1 tbsp annatto seeds soaked in water (for coloring)<br>
            - 1 onion, chopped<br>
            - 5 cups water<br>
            - Bagoong (fermented shrimp paste), for serving<br><br>
            
            <strong>Steps:</strong><br>
            1. Boil oxtail or tripe until tender, reserve the broth.<br>
            2. Sauté onion and add annatto water for color.<br>
            3. Pour in broth, peanut butter, and ground rice, stirring until smooth.<br>
            4. Add vegetables and simmer until cooked.<br>
            5. Serve hot with bagoong on the side.
        `
    },
    
    bicolExpress: {
        title: "Bicol Express",
        content: `
            <strong>Ingredients:</strong><br>
            - 1/2 kg pork belly, sliced thinly<br>
            - 1 cup coconut milk<br>
            - 1 cup coconut cream<br>
            - 5–10 green chili peppers, sliced<br>
            - 1 onion, chopped<br>
            - 3 cloves garlic, minced<br>
            - 2 tbsp shrimp paste (bagoong)<br>
            - Salt to taste<br><br>
            
            <strong>Steps:</strong><br>
            1. Sauté garlic and onion until fragrant.<br>
            2. Add pork and cook until lightly browned.<br>
            3. Stir in shrimp paste and chili peppers, cook for 2 minutes.<br>
            4. Pour in coconut milk and simmer until pork is tender.<br>
            5. Add coconut cream and continue simmering until thick.<br>
            6. Season with salt and serve with rice.
        `
    },
    pakbet: {
        title: "Pinakbet",
        content: `
            <strong>Ingredients:</strong><br>
            - 2 tbsp cooking oil<br>
            - 3 cloves garlic, minced<br>
            - 1 onion, chopped<br>
            - 2 tomatoes, chopped<br>
            - 1/4 kg pork belly, sliced<br>
            - 1 cup squash, cubed<br>
            - 1 cup eggplant, sliced<br>
            - 1 cup bitter melon (ampalaya), sliced<br>
            - 1 cup string beans, cut into 2-inch pieces<br>
            - 1/2 cup okra, whole or sliced<br>
            - 2 tbsp shrimp paste (bagoong)<br>
            - 1/2 cup water<br>
            - Salt and pepper to taste<br><br>
            
            <strong>Steps:</strong><br>
            1. Heat oil in a pan and sauté garlic, onion, and tomatoes until soft.<br>
            2. Add pork and cook until lightly browned.<br>
            3. Stir in shrimp paste and cook for another 2 minutes.<br>
            4. Add squash and a bit of water, simmer for 5 minutes.<br>
            5. Add remaining vegetables and cook until tender but not mushy.<br>
            6. Season with salt and pepper. Serve hot with rice.
        `
    },
    
mangoGrahamFloat: {
    title: "Mango Graham Float",
    content: `
        <strong>Ingredients:</strong><br>
        - 3 ripe mangoes, sliced thinly<br>
        - 1 pack graham crackers<br>
        - 2 cups all-purpose cream (chilled)<br>
        - 1 can condensed milk<br><br>
        
        <strong>Steps:</strong><br>
        1. In a bowl, mix chilled all-purpose cream and condensed milk until well combined.<br>
        2. In a container, layer graham crackers at the bottom.<br>
        3. Add a layer of the cream mixture, then top with mango slices.<br>
        4. Repeat the layers until the container is full, ending with cream and mango on top.<br>
        5. Chill for at least 4 hours or overnight before serving.
    `
},

lecheFlan: {
    title: "Leche Flan",
    content: `
        <strong>Ingredients:</strong><br>
        - 10 egg yolks<br>
        - 1 can condensed milk<br>
        - 1 can evaporated milk<br>
        - 1 tsp vanilla extract<br>
        - 1 cup sugar (for caramel)<br><br>
        
        <strong>Steps:</strong><br>
        1. Melt sugar in a pan over low heat until golden brown, then pour into llanera molds.<br>
        2. In a bowl, mix egg yolks, condensed milk, evaporated milk, and vanilla gently (avoid bubbles).<br>
        3. Strain the mixture and pour into the caramel-lined molds.<br>
        4. Cover with foil and steam for 30–40 minutes or until set.<br>
        5. Let it cool, then refrigerate. Invert before serving.
    `
},

haloHalo: {
    title: "Halo-Halo",
    content: `
        <strong>Ingredients:</strong><br>
        - 1/4 cup sweetened red beans<br>
        - 1/4 cup sweetened banana (saba)<br>
        - 1/4 cup macapuno or coconut strings<br>
        - 1/4 cup jackfruit (langka), sliced<br>
        - 1/4 cup nata de coco or gelatin cubes<br>
        - 1/4 cup corn kernels<br>
        - 1/2 cup crushed or shaved ice<br>
        - 1/4 cup evaporated milk<br>
        - 1 scoop ube ice cream<br>
        - 1 slice leche flan (optional)<br><br>
        
        <strong>Steps:</strong><br>
        1. In a tall glass, layer all the sweetened ingredients at the bottom.<br>
        2. Add shaved ice until the glass is nearly full.<br>
        3. Pour evaporated milk over the ice.<br>
        4. Top with ube ice cream and leche flan.<br>
        5. Mix before eating and enjoy!
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






