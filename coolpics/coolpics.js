const menuButton = document.querySelector("#MenuButton");
const menu = document.querySelector(".links-container");

function toggleMenuItems() {
    // if (menu.classList.contains(".hide")) {
    //     menu.classList.remove(".hide");
    // }
    // menu.classList.add(".hide");
    menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenuItems);


function handleResize(width) {
    if (width > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize(window.innerWidth));

function viewerTemplate(imagePath, altText) {
    return `<div class="viewImg">
        <button class="close">X</button>
        <img class="imgView" src=${imagePath} alt=${altText}>
    </div>`;
}

//ChatGPT helped me write some of this code below

function viewHandler(event) {
    const element = event.target.src;
    const imgName = element.split("/").pop();
    const imgfile = `${imgName.split("-")[0]}-full.jpeg`;
    document.body.insertAdjacentHTML("beforeend", viewerTemplate(imgfile, "broken pic lol"));

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closeViewer);
}

function closeViewer() {
    const element = document.querySelector(".viewImg");
    if (element) {
        element.remove();
    }
}

document.querySelector(".gallery").addEventListener("click", viewHandler);