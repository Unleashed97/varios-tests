
    // function showQuestion()
    // {
    //     // init of dom elems
    //     let quizName = document.getElementById('head');
    //     let questionName = document.getElementById('question');
    //     let questionNumber = document.querySelector('span.question__number');
    //     let answerInput = document.getElementById('answer');
    //     let btnComplete = document.querySelector('button.answer__complete');


    //     // questions and answers
    //     const quiz = 
    //     [
    //         {
    //             'q': 'Столица Италии',
    //             'i': 'images/italy.jpg',
    //             'a': 'РИМ'
    //         },

    //         {
    //             'q': 'Столица России: ',
    //             'i': 'images/russia.jpg',
    //             'a': 'МОСКВА'
    //         }
    //     ];

        
    //     questionName.innerHTML = "done";

    //     // console.log(quizName, questionName, questionNumber, answerInput, btnComplete);
    // }

    // showQuestion();

    // function pow(a,b)
    // {
    //     let result = a;
    //     for(let i=1; i<b; i++)
    //     {
    //         result *= a;
    //     }
    //     return console.log(result);
    // }

        const quiz = [
            {
                'question': 'Столица Италии: ',
                'image': 'images/italy.jpg',
                'answer': 'РИМ'
            },

            {
                'question': 'Столица России: ',
                'image': 'images/russia.jpg',
                'answer': 'МОСКВА'
            },

            {
                'question': 'Столица Великобритании: ',
                'image': 'images/russia.jpg',
                'answer': 'ЛОНДОН'
            },

            {
                'question': 'Столица Франции: ',
                'image': 'images/russia.jpg',
                'answer': 'ПАРИЖ'
            },

            {
                'question': 'Столица Германии: ',
                'image': 'images/russia.jpg',
                'answer': 'Берлин'
            },

            {
                'question': 'Столица Нидерландов: ',
                'image': 'images/russia.jpg',
                'answer': 'АМСТЕРДАМ'
            },
            
            {
                'question': 'Столица Португалии: ',
                'image': 'images/russia.jpg',
                'answer': 'ЛИССАБОН'
            },
        ];


        let result = {};
        let step = 0;

        let showQuestion = questionNumber => {
            const question = document.getElementById('question');
            const image = document.getElementById('image');

            question.innerHTML = quiz[step]['question'];
            image.src = quiz[step]['image'];
        };

        let checkAnswer = (question__number) => {
            let btn = document.querySelector('.answer__complete');
            let input = document.querySelector('.answer__content');

            btn.addEventListener('click', () => {
                let isRightAnswer = false;

                if(input.value.toUpperCase() == quiz[step]['answer']){
                    input.classList.add('right');
                }
                else input.classList.add('wrong');
            });
        };


        let init = () => {
            showQuestion(step);
            checkAnswer(step);
        }

        init();
