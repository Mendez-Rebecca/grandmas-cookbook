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
