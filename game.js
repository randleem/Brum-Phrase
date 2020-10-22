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
    // for each round
    // get question from board - this hopefully will be random - or move between questions
    // need it to go through list of questions that are still on the board - i.e. not yet guessed
    // const move = this.players[this.currentPlayerIndex].getMove(
    //   this.board[currentQuestionIndex].id
    // ); // gets answer
    // check to see if answer is rigth in board
    this.currentPlayerIndex++; //
    if (this.currentPlayerIndex >= this.players.length) {
      this.currentPlayerIndex = 0;
    }
  }

  handleAnswer(answer, id) {
    if (
      answer === this.board.arrayOfQuestions[this.currentQuestionIndex].answer
    ) {
      this.currentQuestionIndex++;
      let x = document.querySelector(`#${id}`); //Emma tryng to make tile disapear - currently not working
      x.style = `background-color: " "`; //Emma tryng to make tile disapear - currently not working
      console.log(`Correct`);
    } else if (
      answer !== this.board.arrayOfQuestions[this.currentQuestionIndex].answer
    ) {
      console.log(`Incorrect`);
    }
  }
}
