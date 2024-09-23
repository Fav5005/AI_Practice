// script.js
const getStartedBtn = document.getElementById('get-started-btn');
const takeQuizBtn = document.getElementById('take-quiz-btn');
const contactForm = document.getElementById('contact-form');
const quizContainer = document.getElementById('quiz-container');
const quizQuestions = document.getElementById('quiz-questions');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const quizResults = document.getElementById('quiz-results');

// Quiz questions and answers
const quizData = [
    {
        question: "What is your current job title?",
        answers: ["Software Engineer", "Data Scientist", "Product Manager", "Other"]
    },
    {
        question: "What is your highest level of education?",
        answers: ["