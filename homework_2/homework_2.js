let score = []
score[0] = 0
score[1] = 0
const totalScore = document.getElementById('totalScore');
function checkAnswer(answer, number) {
    const result = document.getElementById('result');
    const result2 = document.getElementById('result2');

    switch (number) {
        case "1":
            if (answer === 'a') {
                result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
                result.style.color = 'green';
                score[0] = 1
            } else {
                result.textContent = "Incorrect! Try again.";
                result.style.color = 'red';
                score[0] = 0
            }
            sumScore()
            break;
        case "2":

            if (answer === 'b') {
                result2.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
                result2.style.color = 'green';
                score[1] = 1
            } else {
                result2.textContent = "Incorrect! Try again.";
                result2.style.color = 'red';
                score[1] = 0
            }
            sumScore()
            break;
        default:

            break;
    }


}

function sumScore() {
    totalScore.textContent = score[0] + score[1]
}
