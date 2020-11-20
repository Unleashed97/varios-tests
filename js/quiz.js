// dom elements
const question = document.getElementById('question');
const image = document.getElementById('image');
const qNumber = document.querySelector('.question__number');
const progress = document.querySelector('.quiz-footer__content');
const input = document.querySelector('.answer__content');
const mark = document.querySelector('.quiz__mark');
const rightAnswerCountry = document.querySelector('.quiz__description b');
const rightAnswerCapital = document.querySelector('.quiz__right-answer');
const btn = document.querySelector('.answer__complete');
const results = document.querySelector('.result');
const resultsInner = document.querySelector('.result__inner');


// STARTTEST FUNCTION VARS
const greetingWindow = document.querySelector('.gw');
const startTestBtn = document.getElementById('start-test');
const mainWindow = document.querySelector('.main');


let result = [];
let step = 0;

const startTest = () => {
    
    startTestBtn.addEventListener('click', () => {
        greetingWindow.classList.add('fade-out');
        setTimeout(() => greetingWindow.classList.add('hide'), 200);
        mainWindow.classList.add('show');
    });
};

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
    input.value = '';
    input.className = 'answer__content';
    mark.innerHTML = '';
    mark.className = 'quiz__mark';
    rightAnswerCountry.innerHTML = '';
    rightAnswerCapital.innerHTML = '';
}

const showQuestion = questionNumber => {
    let number = step;

    qNumber.innerHTML =  ++number + '. ';
    question.innerHTML = quiz[step]['question'];
    image.src = quiz[step]['image'];
    progress.innerHTML = `Вопрос ${number} / ${quiz.length}`;
};

const showResults = () => {
    
    
    // SHOW ANIMATION
    mainWindow.className = 'main';
    mainWindow.classList.add('fade-out');
    setTimeout(() => mainWindow.classList.add('hide'), 200);
    results.classList.add('show');
    
    
    for(let i = 0; i < quiz.length; i++){
        const divItem = document.createElement('div');
        const qNumber = document.createElement('span');
        const question = document.createElement('h4');
        const hr = document.createElement('HR');
        const answer = document.createElement('div');
        const mark = document.createElement('div');
        const rightAnswer = document.createElement('div');
        
        divItem.classList.add('result__item');
        qNumber.classList.add('result__question-number');
        question.classList.add('result__question');
        answer.classList.add('result__answer');
        mark.classList.add('result__mark');
        rightAnswer.classList.add('result__right-answer');
        let qNumberBuf = i;
        
        // init
        qNumber.innerHTML = `${++qNumberBuf}. `;
        question.innerHTML = quiz[i]['question'];
        answer.innerHTML = `Ваш ответ: ${result[i]['userAnswer']}`;
        if(result[i]['isRight'] == true){
            mark.innerHTML = 'ВЕРНО!';
            mark.classList.add('right');
            divItem.classList.add('right');
        }
        else{
            let modAnswer = quiz[i]['answer'][0] + quiz[i]['answer'].slice(1).toLowerCase();
            mark.innerHTML = 'НЕВЕРНО!';
            mark.classList.add('wrong');
            divItem.classList.add('wrong');
            rightAnswer.innerHTML = `${quiz[i]['question']} ${modAnswer}`;
        }

        // adding to DOM 
        resultsInner.append(divItem);
        divItem.append(qNumber);
        divItem.append(question);
        divItem.append(hr);
        divItem.append(answer);
        divItem.append(mark);
        divItem.append(rightAnswer);
    }


};

const checkAnswer = (question__number) => {
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
                result.push({
                    questionNumber: step,
                    userAnswer: input.value,
                    isRight: true
                });

            }
            else {
                let modAnswer = quiz[step]['answer'][0] + quiz[step]['answer'].slice(1).toLowerCase();
                input.classList.add('wrong');
                mark.classList.add('wrong');
                mark.innerHTML = 'Неверный ответ';
                rightAnswerCountry.innerHTML = quiz[step]['question'];
                rightAnswerCapital.innerHTML = modAnswer;
                result.push({
                    questionNumber: step,
                    userAnswer: input.value,
                    isRight: false
                });

            }
            console.log(result);

            step++;
            if(step == quiz.length)
            {
                showResults();
            }
            else{
                setTimeout('clearForm()', 1000);
                setTimeout('showQuestion(step)', 1000);
            }
        }
    });
};


const init = () => {
    // randomFunc();
    startTest();
    showQuestion(step);
    checkAnswer(step);
}

init();
