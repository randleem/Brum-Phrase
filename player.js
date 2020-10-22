// Player Object Class
// State
// name
// currentTurn
//

// Behaviour
// Question/Answer (pick picture)
// Picture Answer (input)

class Player {
  constructor(name) {
    this.name = name;
    this.playerTurn = false;
  }

  getMove() {
    let turn = document.quesrySelector("h2");
    turn.innerText = `${this.name} Pick Your Tile!!`;
  }
}
