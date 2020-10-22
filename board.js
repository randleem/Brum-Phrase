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
            this.arrayOfQuestions = [];
        }

        setUpBoard(question){
            let q = new Question (question)
            this.arrayOfQuestions.push(q);
            // need tile to be assigned to question
            // randomise tiles display
            // so assign question and tile a number
        }

        checkPlayerAnswer(answer)
        //if(turnAnswer === questionAnswer)

// to check if the answers correct if(questionNumber===tilenumber){
    //true and trigger question.remove
//}

    }

    class Picture {
        constructor(backgroundPic){
            this.backgroundPic = backgroundPic
        }
    }



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
        