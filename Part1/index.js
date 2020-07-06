
const board = [];
console.log('hello')


let play =(clickedId) =>{
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText ='O';
        clickedElement.innerText= 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText= 'X';
        clickedElement.innerText= 'O';
        board[clickedId] = 'O'
    }
    console.log(board);


let topLeft = board[0];
let topMiddle = board[1];
let topRight = board[2];
let middleLeft = board[3];
let middleMiddle = board[4];
let middleRight = board[5];
let bottomLeft = board[6];
let bottomMiddle = board[7];
let bottomRight = board[8];

if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
    alert(`${topLeft} is the winner!`);
    return;
}
if(middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight){
    alert(`${middleRight} is the winner!`);
    return;
}
if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner!`);
    return;
  }
  if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner!`);
    return;
  }
  if(topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    alert(`${topMiddle} is the winner!`);
    return;
  }
  if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner!`);
    return;
  }
  if(topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
    alert(`${topLeft} is the winner!`);
    return;
  }
  if(bottomLeft !== undefined && bottomLeft === middleMiddle && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner!`);
    return;
  }

  let boardFull = true;
  for(let i = 0; i <=8; i++){
      if(board[i] === undefined){
          boardFull = false;
      }
  }
  if(boardFull === true){
      alert("Cat's Game!")
  }
}