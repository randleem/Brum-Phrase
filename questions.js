// Create Question Class
// State
// Question
// Answer = true

//Behaviour
// isAnswerCorrect - true false
// isAnswerTrue - triggers source image to disappear

class Question {
  constructor(number, question, answer) {
    this.number = number;
    this.question = question;
    this.answer = answer;
    this.answerTile = true; // true when on the table
  }

  remove() {
    let tile = document.querySelector(`.tile${number}`);
    tile.style = `background-color: " "`;
  }
}
