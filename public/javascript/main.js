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

applySavedTheme();

let isExpanded = false;

function themeDropdown() {
    const themeButton = document.getElementById('theme-button');
    const themeLinksContainer = document.getElementById('theme-links-container');
    const arrowImg = themeButton.querySelector('.arrow');

    if (!isExpanded) {
        themeButton.classList.add('expanded');
        arrowImg.classList.add('rotate');

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

        const orangeThemeLink = document.createElement('a');
        orangeThemeLink.id = "orange-theme";
        orangeThemeLink.className = "orange-theme";
        orangeThemeLink.textContent = "ORANGE";
        orangeThemeLink.onclick = orangeTheme;

        themeLinksContainer.appendChild(blueThemeLink);
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(greenThemeLink);
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(orangeThemeLink);
        themeLinksContainer.appendChild(document.createElement('br'));
        themeLinksContainer.appendChild(document.createElement('br'));
    } else {
        themeButton.classList.remove('expanded');
        arrowImg.classList.remove('rotate');
        themeLinksContainer.innerHTML = '';
    }
    isExpanded = !isExpanded;
}

function blueTheme() {
    localStorage.setItem('selectedTheme', 'blue');
    applySavedTheme();
}

function greenTheme() {
    localStorage.setItem('selectedTheme', 'green');
    applySavedTheme();
}

function orangeTheme() {
    localStorage.setItem('selectedTheme', 'orange');
    applySavedTheme();
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    const bodyElement = document.body;

    if (savedTheme === 'blue') {
        bodyElement.classList.remove('orange', 'green');
        bodyElement.classList.add('blue');
    } else if (savedTheme === 'green') {
        bodyElement.classList.remove('orange', 'blue');
        bodyElement.classList.add('green');
    } else if (savedTheme === 'orange') {
        bodyElement.classList.remove('blue', 'green');
        bodyElement.classList.add('orange');
    }
}
