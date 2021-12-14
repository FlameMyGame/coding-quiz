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
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
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

            answerContainers[questionNumber].getElementsByClassName.color = 'green';
        } else {
            answerContainers[questionNumber].getElementsByClassName.color = 'red';
        }

    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

}


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



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [{
        question: "Which is the correct use of the <span> element?",
        answers: {
            a: "<p>Hello <span>world</span>!</p>",
            b: "<span>Hello <p>world</p>!</span>",
            c: "<p>Hello <span>world!</p>",
        },
        correctAnswer: "a"
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
        question: "What tag is used to define an unordered list that is bulleted?",
        answers: {
            a: "<u>",
            b: "<li>",
            c: "<s>",
            d: "<ul>",
        },
        correctAnswer: "d"
    },
    {
        question: "What group of tags are used to define the text headers in the body of the HTML document?",
        answers: {
            a: "<footer>",
            b: "<td>",
            c: "<button>",
            d: "<h1> to <h6>",
        },
        correctAnswer: "d"
    },
    {
        question: "What tag is used to render or transform text into an important (bold) version?",
        answers: {
            a: "<blockquote>",
            b: "<a>",
            c: "<strong>",
            d: "<em>",
        },
        correctAnswer: "c"
    },
    {
        question: "What tag can be used to insert a line break or blank line in an HTML document?",
        answers: {
            a: "<head></head>",
            b: "<body></body>",
            c: "<title></title>",
            d: "<br></br>",
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
            a: "<u>",
            b: "<ul>",
            c: "<s>",
            d: "<li>",
        },
        correctAnswer: "a"
    },


]
buildQuiz();


submitButton.addEventListener('click', showResults);