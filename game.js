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
  constructor(arrayOfQuestions, player1, player2){
    this.board = new Board (arrayOfQuestions)
    this.player1 = new Player (player1);
    this.player2 = new Player (player2);
  }
  start(){
    
  }
}




//

  play() {   
    const move = this.players[this.currentPlayerIndex].gettMove();
    this.pileSize.takeCoins(move);
    this.currentPlayerIndex++
    if(this.currentPlayerIndex > this.players.length){
      this.currentPlayerIndex = 0;
    }
    if (this.pile.getActiveCoins() => 0){
      console.log(this.players[this.currentPlayerIndex].name, "wins");
      break
    }
    } 

} 
};

