
let result = {};
let step = 0;

// let randomFunc = () => {
//     const arr = [0,1,2,3,4];

//     for(let i = 0; i<arr.length; i++)
//     {
//         let randomNumber = Math.floor(Math.random() * Math.floor(arr.length));
//         console.log(randomNumber);
//     }
//     // return Math.floor(Math.random() * Math.floor(quiz.length));
// };

const clearForm = () => {
    let input = document.querySelector('.answer__content');
    input.value = '';
    input.className = 'answer__content';
}

let showQuestion = questionNumber => {
    const question = document.getElementById('question');
    const image = document.getElementById('image');
    const qNumber = document.querySelector('.question__number');
    const progress = document.querySelector('.quiz-footer__content');
    let number = step;

    qNumber.innerHTML =  ++number + '. ';
    question.innerHTML = quiz[step]['question'];
    image.src = quiz[step]['image'];
    progress.innerHTML = `Вопрос ${number} / ${quiz.length}`;
};


let checkAnswer = (question__number) => {
    let btn = document.querySelector('.answer__complete');
    let input = document.querySelector('.answer__content');


    btn.addEventListener('click', () => {
        let isRightAnswer = false;

        if(input.value != '' && step < quiz.length){
            if(input.value.toUpperCase() == quiz[step]['answer']){
                input.classList.add('right');
            }
            else input.classList.add('wrong');

            step++;
        }
        setTimeout('clearForm()', 1000);
        setTimeout('showQuestion(step)', 1000);
        
    });
};


let init = () => {
    // randomFunc();
    showQuestion(step);
    checkAnswer(step);
}

init();
