const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.querySelector('.question-btn')
    .addEventListener('click', () => {
        questions.forEach(q => {
            if (q === question) {
                q.classList.toggle('show-text');
            } else {
                q.classList.remove('show-text');
            }
        });
    });
});