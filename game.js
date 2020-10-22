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
  constructor(arrayOfQuestions, players){
    this.board = new Board (arrayOfQuestions)
    this.players = players.map(player => { //players is an array of two players 
        return new Player (player);
  })
    this.currentPlayerIndex = 0;
}
play(){
    while(true){
        const move = this.players[this.currentPlayerIndex].getMove(); // gets answer
        // check to see if answer is rigth in board
        this.currentPlayerIndex++; //
        if(this.currentPlayerIndex >= this.players.length) {
            this.currentPlayerIndex = 0;
        }
    }
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

