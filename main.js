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
      { number:9, question: "Walking Along Canals", answer: "The Cut"},
      { number:10, question: "Mum", answer: "Mom"},
      { number:11, question: "Fantastic", answer: "Bostin"},
      { number:12, question: "Someone Is A Bit Crazy", answer: "Yammy"}
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


