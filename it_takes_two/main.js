import games from "./games.mjs";

function init() {
    //when the screen loads, we only want to show games that are "playable"
    const playableGames = games.filter((game) => game.playable)
    renderGames(playableGames);
}
init();


function getGameTemplate(game) {
    return `<section class="game-container">
                <article class="game">
                    <img src="${game.image}" alt="${game.name}">
                    <div class="game-info">
                        <div class="tags">
                            ${tagTemplate(game.tags)}
                        </div>
                        <h3>${game.name}</h3>
                        <p>${game.description}</p>
                         ${game.playable ? `<a href="${game.pagelink}"><button class="play-button">Play Now!</button></a>` : ""}
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

function renderGames(gamesList) {
    const gameElement = document.querySelector(".games");
    const html = gamesList.map((game) => getGameTemplate(game));
    gameElement.innerHTML = html.join("");
}

function filterGames(query) {
    function searchCallback(game)
    {
        return (game.name.toLowerCase().includes(query)
      || game.description.toLowerCase().includes(query)
      || game.tags.find((tag) => tag.toLowerCase().includes(query)));
    }
    const filteredGames = games.filter(searchCallback);
    filteredGames.sort((a, b) => a.name.localeCompare(b.name));

    renderGames(filteredGames);
}

function searchHandler() {
    let userInput = document.getElementById("game-search").value;
    filterGames(userInput.toLowerCase());
}

document.querySelector("#search-image").addEventListener("click", searchHandler);

//when someone clicks a take turn button, it submits the numbers, the turn is taken, the screen updates accordingly, the text updates,
//and the modal with the randomized question pops up.