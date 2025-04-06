import questions from "./reflection-questions.mjs";

let category = "Creativity";

function init() {
    loadIntroModal();
}
init();

function loadIntroModal() {
    const introModal = document.querySelector("#modal-container");
    const introHTML = introTemplate();

    introModal.innerHTML = introHTML;

    document.querySelector("#category-buttons").addEventListener("click", handleCategorySelection);

    document.querySelector(".close-modal").addEventListener("click", closeQuestion);
}

function introTemplate() {
    return `<div class="question-modal">
                <button class="close-modal">X</button>
                <div id="question-box">
                    <h2>Select a Category</h2>
                    <div class="question-categories" id="category-buttons">
                        ${getCategories()}
                    </div>
                </div>
            </div>
        `;
}

function getCategories() {
    const categories = [...new Set(questions.map(q => q.category))];
    return categories.map(category => `<button class="category-button" data-category="${category}">${category}</button>`).join("");

}

function handleCategorySelection(event) {
    if (event.target.classList.contains("category-button")) {
        category = event.target.dataset.category;
        closeQuestion();
    }
}

function loadModal() {
    const questionModal = document.querySelector("#modal-container");
    const questionHTML = questionTemplate();
    
    questionModal.innerHTML = questionHTML;

    document.querySelector(".close-modal").addEventListener("click", closeQuestion);
}

function questionTemplate() {
    return `<div class="question-modal">
                <button class="close-modal">X</button>
                <div id="question-box">
                    <h2>Selected question category: ${category}</h2>
                    ${getQuestion(category)}
                </div>
            </div>`
}

function getQuestion(category) {
    const categoryQuestions = questions.filter((question) => question.category == category);
    return `<p id="question">${categoryQuestions[getRandomIndex(categoryQuestions)].question}</p>`;
}

function getRandomIndex(list) {
    return Math.floor(Math.random() * list.length);
}

function closeQuestion() {
    const element = document.querySelector(".question-modal");
    if (element) {
        element.remove();
    }
}

document.querySelector("#take-turn").addEventListener("click", loadModal);