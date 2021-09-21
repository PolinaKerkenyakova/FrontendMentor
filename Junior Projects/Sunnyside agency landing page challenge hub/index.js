const navList = document.querySelector('#nav-list');

document.querySelector('#menu').addEventListener('click', (e) => {

    if (navList.style.display === "none") {
        navList.style.display = "block"

    } else {
        navList.style.display = "none"
    }
});