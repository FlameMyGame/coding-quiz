(function() {

    function buildQuiz() {

        const output = [];


        quizQuestions.forEach(

            (currentQuestion, questionNumber) => {

                const answers = [];

                for (letter in currentQuestion.answers) {

                    answers.push(
                        `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }

                output.push(
                    `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                    </div>`
                );
            }
        );

        quizContainer.innerHTML = output.join('');

    }

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;

                answerContainers[questionNumber].style.color = 'green';

            } else {

                answerContainers[questionNumber].style.color = 'red';

            }

        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
        localStorage.setItem('mostRecentScore', numCorrect);

    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            highScoreButton.style.display = 'inline-block';
            saveButton.style.display = 'inline-block';
            submitButton.style.display = 'inline-block';
            usernameForm.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            highScoreButton.style.display = 'none';
            saveButton.style.display = 'none';
            submitButton.style.display = 'none';
            usernameForm.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }




    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const quizQuestions = [{
            question: "What are people who write computer code called?",
            answers: {
                a: "Cryptographers",
                b: "Manufacturers",
                c: "Programmers",
                d: "Professors",
            },
            correctAnswer: "c"
        },
        {
            question: "What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
            answers: {
                a: "Clone",
                b: "Repeater",
                c: "Debugger",
                d: "Loop",
            },
            correctAnswer: "d"
        },
        {
            question: "What is a JavaScript element that represents either TRUE or False values?",
            answers: {
                a: "Condition",
                b: "Boolean",
                c: "RegExp",
                d: "Event",
            },
            correctAnswer: "b"
        },
        {
            question: "In JavaScript, what element is used to store multiple values in a single variable?",
            answers: {
                a: "Arrays",
                b: "Strings",
                c: "Functions",
                d: "Variables",
            },
            correctAnswer: "a"
        },
        {
            question: "Which of these is NOT a programming language?",
            answers: {
                a: "Banana",
                b: "Python",
                c: "Java",
                d: "Ruby",
            },
            correctAnswer: "a"
        },
        {
            question: "What group of tags are used to define the text headers in the body of the HTML document?",
            answers: {
                a: "footer",
                b: "td",
                c: "button",
                d: "h1 to h6",
            },
            correctAnswer: "d"
        },
        {
            question: "What tag is used to render or transform text into an important (bold) version?",
            answers: {
                a: "blockquote",
                b: "a",
                c: "strong",
                d: "em",
            },
            correctAnswer: "c"
        },
        {
            question: "What tag can be used to insert a line break or blank line in an HTML document?",
            answers: {
                a: "head /head",
                b: "body /body",
                c: "title /title",
                d: "br /br",
            },
            correctAnswer: "d"
        },
        {
            question: "What are the CSS properties that are used to add space around sections of content?",
            answers: {
                a: "Cleaner",
                b: "Spacing",
                c: "Break",
                d: "Padding",
            },
            correctAnswer: "d"
        },
        {
            question: "What tag is used to underline a word or line of text?",
            answers: {
                a: "u",
                b: "ul",
                c: "s",
                d: "li",
            },
            correctAnswer: "a"
        },


    ]




    const username = document.getElementById('username');
    const saveScoreBtn = document.getElementById('saveScoreBtn');
    const results = document.getElementById('results');
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    const MAX_HIGH_SCORES = 5;
    console.log(highScores);

    results.innerText = mostRecentScore;

    username.addEventListener("keyup", () => {
        saveScoreBtn.disabled = !username.value;
    });

    saveHighScore = e => {
        console.log("clicked the save button!");

        const score = {
            score: Math.floor(Math.random() * 100),
            name: username.value,
        };
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score)
        highScores.splice(5);

        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.assign("index.html");
    };



    buildQuiz();

    const highScoreButton = document.getElementById("highscores");
    const usernameForm = document.getElementById("username");
    const saveButton = document.getElementById("saveScoreBtn");
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
})();