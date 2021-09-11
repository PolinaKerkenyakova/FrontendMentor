document.querySelector('.btn--cta').addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email');
    const errorDiv = document.querySelector('.error')

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email.value)) {
        email.classList.add('border-red');
        errorDiv.style.display = "block";
    } else {
        email.classList.remove('border-red');
        errorDiv.style.display = "none";
    }
})