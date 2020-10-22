// Object Class
    // State
        // Array of Questions - triggered from question objects
        // Background picture

    // Behaviour
        // setUpBoard()
        // checkAnswer() - T/F
        // checkPictureAnswer - T/F

    class Board {
        constructor(arrayOfQuestions){
            this.arrayOfQuestions = arrayOfQuestions.map((question, i)=> {new Question (i, question.question, question.answer)});
            this.answerTiles = arrayOfQuestions.forEach((question)=> {
                let container = document.querySelector('.container');
                let tile = document.createElement('div');
                tile.innerText = question.answer;
                tile.classList.add('tile');
                tile.style = `background-color: powderblue`;
                container.appendChild(tile);
            } )
    }
}


        //checkPlayerAnswer(answer)
        //if(turnAnswer === questionAnswer)

// to check if the answers correct if(questionNumber===tilenumber){
    //true and trigger question.remove
//}


    // class Picture {
    //     constructor(backgroundPic){
    //         this.backgroundPic = backgroundPic
    //     }
    // }




        