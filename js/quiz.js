
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
    let mark = document.querySelector('.quiz__mark');
    let rightAnswerCountry = document.querySelector('.quiz__description b');
    let rightAnswerCapital = document.querySelector('.quiz__right-answer');

    input.value = '';
    input.className = 'answer__content';
    mark.innerHTML = '';
    mark.className = 'quiz__mark';
    rightAnswerCountry.innerHTML = '';
    rightAnswerCapital.innerHTML = '';

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
    let mark = document.querySelector('.quiz__mark');
    let rightAnswerCountry = document.querySelector('.quiz__description b');
    let rightAnswerCapital = document.querySelector('.quiz__right-answer');


    //HANDLER FOR BUTTON 

    // btn.addEventListener('click', () => {

    //     if(input.value != '' && step < quiz.length){
    //         if(input.value.toUpperCase() == quiz[step]['answer']){
    //             input.classList.add('right');
    //         }
    //         else input.classList.add('wrong');

    //         step++;
    //     }
    //     setTimeout('clearForm()', 1000);
    //     setTimeout('showQuestion(step)', 1000);
        
    // });

    // HANDLER FOR ENTER BTN 

    input.addEventListener('keydown', e => {
        if(e.key === 'Enter' && input.value !== '' && step < quiz.length){
            if(input.value.toUpperCase() === quiz[step]['answer']){
                input.classList.add('right');
                mark.classList.add('right');
                mark.innerHTML = 'Верный ответ';
            }
            else {
                let modAnswer = quiz[step]['answer'][0] + quiz[step]['answer'].slice(1).toLowerCase();
                input.classList.add('wrong');
                mark.classList.add('wrong');
                mark.innerHTML = 'Неверный ответ';
                rightAnswerCountry.innerHTML = quiz[step]['question'];
                rightAnswerCapital.innerHTML = modAnswer;
            }

            step++;
            setTimeout('clearForm()', 1000);
            setTimeout('showQuestion(step)', 1000);
        }
    });
};


let init = () => {
    // randomFunc();
    showQuestion(step);
    checkAnswer(step);
}

init();
