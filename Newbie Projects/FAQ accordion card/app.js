document.querySelectorAll('.question__details').forEach(question => {
    question.addEventListener('click', showHideAnswer);
});

function showHideAnswer(event) {

    const question = event.target.closest('.question');
    const questionText = question.querySelector('.question__text')
    const answer = question.querySelector('.qustion__answear');
    const arrow = question.querySelector('.question__arrow');

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        arrow.classList.add('rotate-arrow');
        questionText.classList.add('highlight-question');
    } else {
        answer.classList.add('hidden');
        arrow.classList.remove('rotate-arrow');
        questionText.classList.remove('highlight-question');
    }
}