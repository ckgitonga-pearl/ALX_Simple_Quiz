function checkAnswer() {
    // Function body
}
let correctAnswer = "4";
 let selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;
const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);