const gameBoard = document.getElementById('gameBoard');
const scoreboard = document.getElementById('scoreboard');

// Sample question data
const questions = [
    {
        question: "What is the capital of France?",
        media: "image.jpg", // Replace with actual media path
        answer: "Paris"
    },
    // ... more questions
];

function createQuestionCard(question) {
    // Create card element
    const card = document.createElement('div');
    card.classList.add('question-card');

    // Add question text
    const questionText = document.createElement('p');
    questionText.textContent = question.question;
    card.appendChild(questionText);

    // Add media (replace with appropriate media element)
    const mediaElement = document.createElement('img');
    mediaElement.src = question.media;
    card.appendChild(mediaElement);

    // Add show answer button
    const showAnswerButton = document.createElement('button');
    showAnswerButton.textContent = 'Show Answer';
    showAnswerButton.addEventListener('click', () => {
        // Logic to show the answer
        const answerElement = document.createElement('p');
        answerElement.textContent = question.answer;
        card.appendChild(answerElement);
        showAnswerButton.disabled = true;
    });
    card.appendChild(showAnswerButton);

    gameBoard.appendChild(card);
}

// Create question cards
questions.forEach(createQuestionCard);

// Function to add points to a team
function addPoints(team, points) {
    const teamElement = document.getElementById(team1);
    const currentScore = parseInt(teamElement.textContent.split(':')[1]);
    teamElement.textContent = `${team}: ${currentScore + points}`;
}
