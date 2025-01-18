const themeSelector = document.querySelector("select");

//Changes theme based on state of themeSelector
function changeTheme()
{
    //Get value of theme, body, and image
    const currentValue = themeSelector.value;
    const bodyState = document.querySelector("body");
    const image = document.querySelector("img");

    //If dark mode, set class to dark and change image
    if (currentValue == "dark")
    {
        bodyState.setAttribute("class", "dark");
        image.setAttribute("src", "byui-logo_white.png");
    }
    //If not, default should be regular light mode and image
    else
    {
        bodyState.setAttribute("class", "");
        image.setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener('change', changeTheme);