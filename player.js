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
    //this.playerTurn = false;
  }

  getMove(answer) {
    let turn = document.quesrySelector("h2");
    turn.innerText = `${this.name} Pick Your Tile!!`;
    let tile = document.querySelector(".tile");
    tile.addEventListener("click", (event) => {
      if (event.id === answer) {
        // need to check if the answer is correct
        event.style = `background-color: " "`;
      }
    });
  }
}
