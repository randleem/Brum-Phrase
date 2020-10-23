
class Game {
  constructor(arrayOfQuestions, players) {
    this.board = new Board(arrayOfQuestions); // Can we randomly assign so the answers arent in the same order as the question
    this.players = players.map((player) => {
      //players is an array of two players
      return new Player(player);
    });
    this.currentPlayerIndex = 0;
    this.currentQuestionIndex = 0;
  }
  play() {
    this.board.drawTiles((answer) => {
      this.handleAnswer(answer);
    });
    document.querySelector("#player-display").innerText= `${this.players[this.currentPlayerIndex].name} your turn! Please choose a tile.`;
    
  }


  handleAnswer(answer) {
    if (
      answer === this.board.arrayOfQuestions[this.currentQuestionIndex].answer
    ) {
      let x = document.querySelector(`#tile-${this.board.arrayOfQuestions[this.currentQuestionIndex].number}`); //Emma tryng to make tile disapear - currently not working
      x.innerText = ""
      x.style = `background-color: " "`; 
      this.displayInputBox();
      this.inputGuess();
      this.currentQuestionIndex++;
    } else if (
      answer !== this.board.arrayOfQuestions[this.currentQuestionIndex].answer
    ) {
      if (this.currentPlayerIndex < this.players.length-1) {
        this.currentPlayerIndex++;
      } else if (this.currentPlayerIndex === this.players.length-1) {
        this.currentPlayerIndex = 0;
      }
      document.querySelector("#player-display").innerText= `${this.players[this.currentPlayerIndex].name} your turn! Please choose a tile.`;
      return false;
    }
    
  }


displayInputBox(){
  let inputDiv = document.querySelector("#input-div");
  let button = document.createElement("button");
  button.innerText = "Submit";
  let input = document.createElement("input");
  input.setAttribute("id", `input-text`);
  input.placeholder= 'Guess the image!';
  inputDiv.appendChild(input);
  inputDiv.appendChild(button);
  // this.inputGuess();
}

inputGuess(){
  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    console.log('working');
        tile.style = `background-color: #ecce3e`;
        let guess = document.querySelector("#input-text").value;
    if (guess.toLowerCase() === 'twirl'){
      document.querySelector("#player-display").innerText= `Congratulations ${this.players[this.currentPlayerIndex].name} you're the winner!!!!`;
    let DeleteAllTiles= document.querySelector(".container");
    DeleteAllTiles.remove();
    let deleteInput= document.querySelector("#input-text");
    deleteInput.remove();
    let deleteButton = document.querySelector("button");
    deleteButton.remove();

    } else if (guess.toLowerCase() !== 'twirl'){
      document.querySelector("#question-display").innerText= `What is the brummy word for: ${this.board.arrayOfQuestions[this.currentQuestionIndex].question}?`;
      if (this.currentPlayerIndex < this.players.length-1) {
        this.currentPlayerIndex++;
      } else if (this.currentPlayerIndex === this.players.length-1) {
        this.currentPlayerIndex = 0;
      }
      document.querySelector("#player-display").innerText= `${this.players[this.currentPlayerIndex].name} your turn! Please choose a tile.`;
      let deleteInput= document.querySelector("#input-text");
    deleteInput.remove();
    let deleteButton = document.querySelector("button");
    deleteButton.remove();
    }
  })

  };
}


// Game object Class
// States
// Board
// Players
// Active Player Index
// Question Number & Question
// IsRunning

//Behaviours
// Start()
// Winner()
// Next Player()
// Next Question()

// fileArrayOfQuestion.forEach(setUpBoard);