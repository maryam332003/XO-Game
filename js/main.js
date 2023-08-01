let turn = "X";
let gameTitle = document.querySelector(".gameTitle");
let squares = [];

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById('item'+i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    gameTitle.innerHTML=`${squares[1]} WINNER`
  }
  else if(
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    gameTitle.innerHTML=`${squares[4]} WINNER`
  }
  else if(
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[9] != ""
  ) {
    gameTitle.innerHTML=`${squares[7]} WINNER`
  }
  else if(
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    gameTitle.innerHTML=`${squares[1]} WINNER`

  }
  else if(
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    gameTitle.innerHTML=`${squares[7]} WINNER`

  }
}
function game(id) {
  let element = document.getElementById(id);
  // console.log(element);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    gameTitle.innerHTML = "O";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    gameTitle.innerHTML = "X";
  }
  winner()
}
