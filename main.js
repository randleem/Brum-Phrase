// let answer;
players = ["Isobel", "Emma"];
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

let x = new Game(
  [
    { number:1, question: "Farewell Saying", answer: "Tarra a Bit"},
    { number:2, question: "In a bad mood", answer: "Got a cob on"},
    { number:3, question: "Eating loudly", answer: "Chobbling"},
    { number:4, question: "I didnt do that", answer: "I didnt do that"},
    { number:5, question: "Selling News", answer: "Evelyn Mal"},
  ],
  ["Emma", "Isobel"]
);

x.play();
