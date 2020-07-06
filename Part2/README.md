<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Poker Hand

# Project Summary

In this project we will continue practicing vanilla Javascript DOM manipulation by creating an editable poker hand. We will be able to edit the styling (color) of each card through vanilla Javascript to match the color it should be. 

## Step 1

### Summary

In this step, we will connect a javascript file to our HTML.

### Instructions

- Create a file in the Part2 folder called `index.js`.
- Open `index.html`.
- Add a script tag at the bottom of `body` tag and connect the `index.js` file we just created. 
    - Test this connection by adding a `console.log` that says `The house always wins!`. This way we can be sure the file was brought in properly.


### Solution

<details>
<summary> <code> /index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styles</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
<body>
  <header><h1>Poker Cards</h1></header>
    <main>
        <section><span>A</span><span>♦</span><span>A</span></section>
        <section><span>A</span><span>♣</span><span>A</span></section>
        <section><span>A</span><span>♥</span><span>A</span></section>
        <section><span>A</span><span>♠</span><span>A</span></section>
    </main>
    <script src="./index.js"></script>
</body>
</html>
```
</details>

## Step 2

### Summary

In this step, we will create input fields that can be used to pass information to `index.js`.

### Instructions

- Open `index.html`.
- Create 2 input fields under the main tag. The first input will be used to grab the id of each card, the second will be used to assign a style attribute to the card.
- Assign a specific id to each input.
- Open `index.js`
- Using `getElementById`, grab the information of each input field. Assign a variable to each of those, and `console.log` the results.

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- We need the ability to add new cards to our hand, and the way were going to do that is by using two input fields. 
  - Make two input fields that are of type text, each with their own unique id. call the first id `idInput` and the second one `colorInput`.
  - Lets also give them a place holder value that will appear if nothing is typed into the input boxes. the input with the id of `idInput` should have a place holder of `placeholder='Set ID'`. The other one should have `placeholder='Set Color'`.
- Inside `index.js` we need to select the two inputs using `getElementById`. Select both inputs and save them into variables so we can access them later.
  - `console.log` the variables to make sure that you got the correct elements.

</details>

### Solution

<details>

<summary> <code> /index.html </code> </summary>

```html
<body>
  <header>Poker Cards</header>
    <main>
        <section><span>A</span><span>♦</span><span>A</span></section>
        <section><span>A</span><span>♣</span><span>A</span></section>
        <section><span>A</span><span>♥</span><span>A</span></section>
        <section><span>A</span><span>♠</span><span>A</span></section>
    </main>
    <input id='idInput' type="text" placeholder='Set ID'/>
    <input id='colorInput' type="text" placeholder='Set Color'/>
    <script src='./index.js'></script>
</body>
</html>
```

</details>

<details>

<summary> <code> /index.js </code> </summary>

```js
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);
```

</details>

## Step 3

### Summary

In this step, we will target each card using the input fields that we created.

### Instructions

- Open `index.html`.
- Assign a specific id to each `section` tag. These are the 4 cards in our hand. Have each id match the corresponding playing card suit (diamonds, clubs, hearts, and spades).
- Create a button beneath the input fields. 
- Assign two attributes to the button: 
    - A specific id.
    - An onclick event called `setCard`.
- Open `index.js`
- Create a function called `setCard` that captures the card element based off of the value (id) that is passed into first input field. This will be done using a combination of `getElementById` and the `value` property from the first variable we stored form the second step. 
- `Console.log` the result, and check the developer console.

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- Inside of `index.html` we need to assign an id to each `section` inside of the `main` tag. The id's should match the suit that each section is displaying.
  - The first one should have an id of `diamonds`, second `clubs`, third `hearts`, fourth `spades`.
- Create a `button` under the `input`s. The button should be given two properties, an id of `btn`, and an `onclick` equal to `setCard()`. We have not made that function yet, but we will.
- Inside of `index.js` we need to create a function called `setCard`. This function will not take in any parameters.
  - We are going to use `getElementById` and `idInput.value` to select the element we want.
  - `idInput.value` is equal to whatever the user has typed into the input at the time of the button click. Its type is a string, so we can pass it into the `getElementById()` as the argument since it also expects a string. Store the result into a variable called `card`.
  - Provided the user typed in the id correctly it should return the element with the correct id. Lets `console.log(card)` so we can make sure its working properly.
  - Now, type in a card suit into the first input and click the button. You should see a `console.log` of the correct element.

</details>

### Solution

<details>

<summary> <code> /index.html </code> </summary>

```html
<!DOCTYPE html>
... html
<body>
  <header>Poker Cards</header>
    <main>
        <section id='diamonds'><span>A</span><span>♦</span><span>A</span></section>
        <section id='clubs'><span>A</span><span>♣</span><span>A</span></section>
        <section id='hearts'><span>A</span><span>♥</span><span>A</span></section>
        <section id='spades'><span>A</span><span>♠</span><span>A</span></section>
    </main>
    <input id='idInput' type="text" placeholder='Set ID'>
    <input id='colorInput' type="text" placeholder='Set Color'>
    <button id='btn' onclick='setCard()'>Edit Card</button>
    <script src='./index.js'></script>
</body>
</html>
```

</details>

<details>

<summary> <code> /index.js </code> </summary>

```js
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
  const card = document.getElementById(idInput.value);
  console.log(card);
}
```

</details>


## Step 4

### Summary

In this step, we will create a poker hand of 4 of a kind.

### Instructions

- Open `index.js`.
- Target the card that is being selected in the function `setCard`.
- Using the information gathered from the second input field, add the `color` style to the targeted card element.
    - Assign the appropriate color to each card (Diamonds/Hearts = red, Clubs/Spades = black).

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- The final thing we are going to do is apply a color to the section using the second input we have set up.
- Using `card.style.color` set it equal to `colorInput.value`, being whatever is typed into the second input.
- If done properly the text and symbol should change colors appropriately.

</details>

### Solution

<details>

<summary> <code> /index.js </code> </summary>

```js
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}
```

</details>


## Black Diamond 
- Create a button that resets the attributes of each card. 


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2019. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p># vanillaJS-assignment
