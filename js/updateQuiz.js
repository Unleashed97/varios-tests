
const questions = 
[
    new Question('Столица Италии',
    [
        new Answer('РИМ')
    ]),
    new Question('Столица России: ',
    [
        new Answer('МОСКВА')
    ])
];

const quiz = new Quiz(questions);

function update()
{
    if(quiz.current < quiz.questions.length)
    {
        questionName.innerHTML = quiz.questions[quiz.current].text;
    }
}

function init()
{
    let quizName = document.getElementById('head');
    let questionName = document.getElementById('question');
    let questionNumber = document.querySelector('span.question__number');
    let answerInput = document.getElementById('answer');
    let btnComplete = document.querySelector('button.answer__complete');

    console.log(quizName, questionName, questionNumber, answerInput, btnComplete);
}

init();
