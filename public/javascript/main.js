function closeNav() {
    document.getElementById('sideNav').style.width = '0';
    document.getElementById('main-body').style.marginLeft = '0';
    const timer = setInterval(function() {
        document.getElementById('hamburger').style.visibility = 'visible';
        clearInterval(timer);
    }, 300);
}

function openNav() {
    document.getElementById('sideNav').style.width = '250px';
    document.getElementById('main-body').style.marginLeft = '250px';
    document.getElementById('hamburger').style.visibility = 'hidden';
}

let isExpanded = false;

function themeDropdown() {
    const themeButton = document.getElementById('theme-button');
    const themeLinksContainer = document.getElementById('theme-links-container');

    if (!isExpanded) {
        themeButton.innerHTML = "THEMES v";

        // Create and append the theme links
        const blueThemeLink = document.createElement('a');
        blueThemeLink.id = "blue-theme";
        blueThemeLink.className = "blue-theme";
        blueThemeLink.textContent = "BLUE";
        blueThemeLink.onclick = blueTheme;

        const greenThemeLink = document.createElement('a');
        greenThemeLink.id = "green-theme";
        greenThemeLink.className = "green-theme";
        greenThemeLink.textContent = "GREEN";
        greenThemeLink.onclick = greenTheme;

        themeLinksContainer.appendChild(blueThemeLink);
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(greenThemeLink);
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(document.createElement('br'));
    } else {
        themeButton.innerHTML = "THEMES >";

        // Clear the theme links
        themeLinksContainer.innerHTML = '';
    }

    isExpanded = !isExpanded;
}

function blueTheme() {

}

function greenTheme() {

}
