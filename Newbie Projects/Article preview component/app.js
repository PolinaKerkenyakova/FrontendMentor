const mobileShare = document.querySelector('.card__share-options-mobile');

document.querySelectorAll('#share').forEach(shareBtn => shareBtn.addEventListener('click', (e) => {

    if (mobileShare.style.display === "none") {
        mobileShare.style.display = "block";
    } else {
        mobileShare.style.display = "none";
    }
}));
