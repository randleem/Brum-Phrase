// let answer
// // let tile1 = document
// //   .querySelector("#tile-1")
// //   .addEventListener("click", function () {
// //     return tile1.id;
// //   });
// let tile1 = document.querySelector("#tile-1");
// let tile2 = document.querySelector("#tile-2");
// let tile3 = document.querySelector("#tile-3");
// let tile4 = document.querySelector("#tile-4");

// tile1.addEventListener("click", () => console.log(tile1.innerText));
// answer = tile2.addEventListener("click", () => {
//   return tile2.id;
// });
// console.log(answer);
// tile3.addEventListener("click", () => (answer = tile3.id));
// tile4.addEventListener("click", () => (console.log (tile4.id)));

// function getQuestionId(tile) {
//   let id = tile.id;
//   console.log(id);
// }

// console.log(tile1);

// const testboard = new Board([
//   { question: "what your name", answer: "Emma" },
//   { question: "where do you live", answer: "Kingsheath" },
// ]);
let player1 = prompt(`Please Enter Player 1's Name`);
let player2 = prompt(`Please Enter Player 2's Name`);

startImage = document.querySelector("#start-image");
startImage.addEventListener("click", () =>{

  startImage.remove();
  let x = new Game(
    [
      { number:1, question: "Farewell Saying", answer: "Tarra A Bit"},
      { number:2, question: "In A Bad Mood", answer: "Got A Cob On"},
      { number:3, question: "Eating Loudly", answer: "Chobbling"},
      { number:4, question: "I Didn't Do", answer: "I Ay Done"},
      { number:5, question: "Selling News", answer: "Evelyn Mal"},
      { number:6, question: "Round About", answer: "Island"},
      { number:7, question: "Forward Roll", answer: "Gambol"},
      { number:8, question: "Vehicle", answer: "Buz"},
      { number:9, question: "Walking Along Canals", answer: "The Cut"}
    ],
    [player1, player2]
  );
  x.play();
  randomise()
})

function randomise (){
  var div = document.querySelector('.container');
  for (var i = div.children.length; i >= 0; i--) {
      div.appendChild(div.children[Math.random() * i | 0]);
  }
}




