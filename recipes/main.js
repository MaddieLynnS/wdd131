import recipes from "./recipes.mjs";

function getRandomNumber() {
    return Math.floor(Math.random() * recipes.length);
}

function getRandomRecipe(listOfRecipes) {
    return listOfRecipes[getRandomNumber()];
}

function getRecipeTemplate(recipe) {
    return `<section class="recipe-container">
    <article class="recipe">
                    <div>
                        <img src="${recipe.image}" alt="${recipe.name}">
                    </div>
                    <div class="recipe-info">
                        <div class="tags">
                            ${tagTemplate(recipe.tags)}
                        </div>
                        <h3><a href="#">${recipe.name}</a></h3>
                        <span
                            class="rating"
                            role="img"
                            aria-label="Rating: ${recipe.rating} out of 5 stars"
                            >
                            ${ratingTemplate(recipe.rating)}
                        </span>
                        <p>${recipe.description}</p>
                    </div>
                </article>
                </section>`;
}

function tagTemplate(tags) {
    let html = ``;
    tags.forEach(tag => {
        html += `<p id="tag">${tag}</p>\n`;
    });
    return html;
}

function ratingTemplate(rating) {
	let html = ``;
    for(let i = 1; i < 6; i++) {
        html += `<span aria-hidden="true" class="icon-star`;
        html += (i <= rating ? `">⭐` : `-empty">☆`);
        html += `</span>\n`;
    }
    return html;
}

function renderRecipes(recipeList) {

    const recipeElement = document.querySelector(".recipes");
    const html = recipeList.map((recipe) => getRecipeTemplate(recipe));
    recipeElement.innerHTML = html.join("");

}

function init() {
  const recipe = getRandomRecipe(recipes)
  renderRecipes([recipe]);
}
init();

function filterRecipes(query) {
    function searchCallback(recipe)
    {
        return (recipe.name.toLowerCase().includes(query)
      || recipe.description.toLowerCase().includes(query)
      || recipe.tags.find((tag) => tag.toLowerCase().includes(query))
      || recipe.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(query)));
    }
    const filteredRecipes = recipes.filter(searchCallback);
    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));

    renderRecipes(filteredRecipes);
}

function searchHandler() {
    let userInput = document.getElementById("recipe-search").value;
    filterRecipes(userInput.toLowerCase());
}

document.querySelector("#search-image").addEventListener("click", searchHandler);