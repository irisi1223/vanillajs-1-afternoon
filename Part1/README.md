<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Tic Tac Toe Board

# Project Summary

In this project, we will practice vanilla Javascript DOM manipulation by creating a Tic Tac Toe game.

## Step 1

### Summary

In this step, we will create a Javascript file and connect it to our HTML file.

_Note: Review the exisiting HTML so you are familiar with the structure you are interacting with_

### Instructions

- Create a file in the `Part1` directory called `index.js`.
- Add a `script` tag at the bottom of the `body` tag and connect the `index.js` file we just created.
  - `console.log` a message to test the connection from your script file.


### Solution

<details>

<summary> <code> /index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <nav>
      <h1>Tic Tac Toe Board!</h1>
    </nav>
    <main>
      <table>
        <tr class="row">
          <td id="0" onclick="play(0)"></td>
          <td id="1" onclick="play(1)"></td>
          <td id="2" onclick="play(2)"></td>
        </tr>
        <tr class="row">
          <td id="3" onclick="play(3)"></td>
          <td id="4" onclick="play(4)"></td>
          <td id="5" onclick="play(5)"></td>
        </tr>
        <tr class="row">
          <td id="6" onclick="play(6)"></td>
          <td id="7" onclick="play(7)"></td>
          <td id="8" onclick="play(8)"></td>
        </tr>
      </table>
      <span>Player </span>
      <span id="player">X</span>
      <span>'s turn</span>
    </main>
    <script src="./index.js"></script>
  </body>
</html>

```
</details>

## Step 2

### Summary

In this step, we will reassign value of the `player` from `X` to `O` when the board is clicked. This will occur after a `player` has clicked the board to take their turn and it is then the next players turn.

### Instructions
- In index.js, create a function called `play`. We will be invoking this function any time one of 9 boxes are clicked. 
- Using the passed in parameter and `getElementById` select the box that was clicked and save it to a new variable.
- In the `play` function, using 'getElementById', select the span in the html with the id of `player`. 
- Every time this function runs we will want to toggle the `X` to a `O` or vise versa to signify the next player's turn.
- At the conclusion of this step you should see that when the board is clicked, it alternates between inserting an X and an O 

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

  - The first thing that we will want to do inside our `index.js` file is to make a function called `play`. This function will not take in any parameters.
  - Inside the `play` function we need to get the element in the html document that displays who's turn it currently is. Notice that in the HTML file there is a span surrounding an X with an id of `player`.
    - To select the span we will need to use `document.getElementById('player')` and store it in a variable called `playerSpan` so we can reference it later in the function.
  - Now that we have selected the span and stored it to a variable we need to toggle the text inside the html to be either `X` or `O`.
    - To do this we need to write an if statement that checks if the `playerSpan.innerText` is `===` to `X`.
    - If `playerSpan.innerText` is equal to `X` then set the the value of `playerSpan.innerText` to `O`.
    - Else, set the value of `playerSpan.innerText` to `X`, Because if it isn't `X` It should be `O`

</details>


### Solution

<details>

<summary> <code> /index.js </code> </summary>

```js
function play() {
  const playerSpan = document.getElementById('player');

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
  } else {
    playerSpan.innerText = 'X';
  }
}
```

</details>

## Step 3

### Summary

In this step, we will put either an `X` or an `O` as the content of the square that is clicked.

### Instructions
- Open `index.js`
- Add a parameter to the function `play`. The value being passed in is the id of the box that was clicked.
- Using the passed in parameter and `getElementById` select the box that was clicked and save it to a variable.
- Using that variable, set the `innerText` of the clicked element to have the value of the current player.

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- Inside of `index.js` we need to make some more changes to the `play` function.
- Change the function so that it now takes in a parameter, it can be named what ever we want, but for clarity sake lets call it `clickedId`.
- The value that gets passed in is the id of the selected element, so lets use that and `document.getElementById(clickedId)` and save it to a variable called `clickedElement`.
- Inside the if statement lets set the `clickedElement.innerText` equal to `X`. In the else clause, set it to `O`. 

</details>

### Solution

<details>

<summary> <code> /index.js </code> </summary>

```js
function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
  }
}
```

</details>

## Step 4

### Summary

In this step, we will create an array that will keep track of the game's progress.

### Instructions

- Create a variable at the top of index.js, outside the `play` function, that is assigned an empty array as its value.
- In the `play` function, add the current player's value (`X` or `O`) to the array we defined above at the index of `clickedId`. 
    - ex. If the top left square was clicked by player `X`, we would expect `X` to be added to the array at index 0.
    - ex. If the very center square was clicked by player `O`, we would expect `O` to be added to the array at index 4.
	- `console.log` the array in your function to keep track of it's current value (use the inspector tool by right-clicking on the page and selecting "Inspect" to view your `console.log` in the Console tab).

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- Create a variable at the top of the document, outside the `play` function that is equal to an empty array, lets call it `board`.
  - This array will be keeping track of who played what where and eventually will be how we determine if 3 items are clicked in a row.
- In the if clause of the `play` function, set the array at the index that is the same as the `clickedId` to a string of `X`. We will do this by typing something like this `board[clickedId] = 'X'`.
- In the else clause of the `play` function, set the array at the index that is the same as the `clickedId` to a string of `O`. We will do this by typing something like this `board[clickedId] = 'O'`

</details>

### Solution


<details>
<summary><code>/index.js</code> </summary>

```js
const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);
}
```

</details>

## Step 5

### Summary

In this step, we will complete the logic that will determine if there is a winner, and alert that winner to the window.

### Instructions

- You will need to determine if there is a winner, and display the winning player to the screen using `window.alert`.
    - There are many different ways to accomplish this task. Think through and write out each step that is needed as an outline.
     - The most straightforward approach is to check every possible winning combination (this will require A LOT of if statements!)
- If there is no winner and the board is filled with all 9 spots taken up then alert that the game was a "CAT's" game.


<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- We will need to be referencing each item of the array pretty often, so to make our typing a bit easier lets store each index of the array into its own variable.
  - This step is not needed for the function to run properly, but it will make it easier to read.
  - Lets name each square appropriately by naming each of the 9 variables based off its location in the grid. For instance `topRight`, `topCenter`, and `middleCenter`.
- We next need to check if a winner has been determined. To do that we need to check every possible winning combination. For instance if `topLeft`, `topMiddle` and `topRight` all equal each other then we know we have a winner, almost. It is possible that all 3 squares have no value so they would all equal `undefiend`, which is not a winner. Because of that we need to first check that one of the squares does not equal `undefined`.
  - It will look something like this `if (topRight !== undefined && topRight === topCenter && topRight === topRight)`
  - In the case that all 3 are the same values then we will alert the winner. We can tell who won by looking at any of the 3 values, as what those variables hold is who played in those squares.
- Finally we need to check if the board has been filled in yet. To do this we are going to write a for loop that loops exactly 9 times, and check each index of the array.
  - If any of the index of the array contains `undefined`, we know that the array is not yet full. To keep track of this we need to create a variable called `boardFull` that by default is set to true. If we ever see the value `undefined` then we need to set its value to `false`.
  - After the for loop if the value of `boardFull` is is still true we need to alert, that it was a cats game.

</details>

### Solution

<strong>Treat this as a toy problem. There are many solutions to finding a winner in Tic-Tac-Toe, so try your best to solve this on your own before looking at the solution below. </strong>

<details>
<summary><code>/index.js</code> </summary>

```js
const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  console.log(board);
}
  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  // CHECKS ALL WINNING COMBINATIONS
  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  // DETERMINES IF THE BOARD IS FULL, ALERTS WHEN IT IS
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }


```

</details>

## Black Diamond 

1. Create a function that resets the board after each game. This function should be called after the winner is revealed.
2. Add a button that runs the reset function when it is clicked.
3. The current logic allows players to override a square that has already been played. Alter the function to remove the ability to override a square. 
4. Alter the game so that users can not continue to play after a winner has been decided.


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2019. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
