function startQuiz() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <p>1. Who developed Valorant?</p>
        <button class="check" onclick="answerQuestion(1, true)">Riot Games</button>
        <button class="check" onclick="answerQuestion(1, false)">Blizzard</button>
        <p>2. What year was Valorant released?</p>
        <button class="check" onclick="answerQuestion(2, true)">2020</button>
        <button class="check" onclick="answerQuestion(2, false)">2019</button>
        
    `;
}

function answerQuestion(question, isCorrect) {
    const buttons = document.getElementsByClassName('check');
    if (isCorrect) {
        buttons[2 * (question - 1)].style.backgroundColor = 'green';
        // alert(`Correct! Question ${question} was answered correctly.`);
    } else {
        buttons[2 * (question - 1)+1].style.backgroundColor = 'red';
        // alert(`Wrong! Question ${question} was answered incorrectly.`);
    }
}
