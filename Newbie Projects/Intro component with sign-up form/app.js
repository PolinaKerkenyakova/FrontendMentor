document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const firstName = data.get('first-name');
    const lastName = data.get('last-name');
    const email = data.get('email');
    const password = data.get('password');


    if (firstName == '') {
        display('.first-name-error');
    } else {
        hide('.first-name-error');
    }

    if (lastName == '') {
        display('.last-name-error');
    } else {
        hide('.last-name-error');
    }

    if ((/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(email)) {
        hide('.email-error');
    } else {
        display('.email-error')
    }

    if (password == '') {
        display('.password-error');
    } else {
        hide('.password-error');
    }
})

function display(className) {
    document.querySelector(`${className}`).style.display = "block";
}

function hide(className) {
    document.querySelector(`${className}`).style.display = "none";
}