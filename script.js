let correctsAnswers = 0;
let currentPage = 1;
const totalPages = 5;

function checkAnswer(event) {
    const answer = event.target.className;
    const tagType = event.target.tagName;
    if(tagType === 'BUTTON') {
        if (answer === 'opcao-correta') {
            correctsAnswers += 1;
        }
        nextPage();
    }
}

function nextPage() {
    const page = document.querySelector(".question-" + currentPage);
    page.classList.add('escondido');
    currentPage += 1;
    const spanCurrentPage = document.querySelector('.current-question');
    spanCurrentPage.innerHTML = currentPage;
    if (currentPage > totalPages) {
        hidePages();
        showPoints();
    } else {
        const nextPage = document.querySelector(".question-" + currentPage);
        nextPage.classList.remove('escondido');
    }
}

function showPoints() {
    const message = correctsAnswers;
    const divResultado = document.querySelector('.resultado');
    const textoResultado = document.querySelector('.corrects-answers');
    divResultado.classList.remove('escondido');
    textoResultado.innerText = message;
}

function hidePages(){
    document.querySelector('.questions-answered').classList.add('escondido');
}

function voltarParaOFuturo(){
    correctsAnswers = 0;
    currentPage = 1;

    const divResultado = document.querySelector('.resultado');
    divResultado.classList.add('escondido');

    const page = document.querySelector(".question-" + currentPage);
    page.classList.remove('escondido');

    const questionsAnswered = document.querySelector('.questions-answered');
    questionsAnswered.classList.remove('escondido');

    const spanCurrentQuestion = document.querySelector('.current-question');
    spanCurrentQuestion.innerHTML = currentPage;

}
