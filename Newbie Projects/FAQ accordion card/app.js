document.querySelectorAll('.question__details').forEach(question => {
    question.addEventListener('click', showHideAnswer);
});

const arrow = document.querySelector('.question__arrow');

function showHideAnswer(event) {

    const question = event.target.closest('.question')
    const answer = question.querySelector('.qustion__answear');

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        arrow.classList.add('rotate-arrow');
    } else {
        answer.classList.add('hidden');
        arrow.classList.remove('rotate-arrow');
    }
}