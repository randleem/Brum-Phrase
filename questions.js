
// Create Question Class
    // State
        // Question
        // Answer = true

    //Behaviour
        // isAnswerCorrect - true false
        // isAnswerTrue - triggers source image to disappear

class Question {
    constructor(question, answer){
        this.number = number
        this.question = question;
        this.answer = answer;
        this.answerTile = true; // true when on the table
    }
    
    remove(){
        this.answerTile = false; 
        let tile = document.querySelector(`.tile${number}`)
        tile.addEventListener("click", () => {tile.style = `background-color: " "`})
    }

}








 