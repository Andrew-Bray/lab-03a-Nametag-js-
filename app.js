const newName = document.getElementById('name-input');
const myName = document.getElementById('my-name');
const myNameButton = document.getElementById('name-button');
const blueButton = document.getElementById('blue-button');
const pinkButton = document.getElementById('pink-button');
const yellowButton = document.getElementById('yellow-button');

const myMain = document.getElementById('main-element')

myNameButton.addEventListener('click', () => {
    const userInput = newName.value;

    myName.textContent = userInput;
    newName.value= "";

})

blueButton.addEventListener('click', () => {
    myMain.style.background = "blue";
})
pinkButton.addEventListener('click', () => {
    myMain.style.background = "pink";
})
    yellowButton.addEventListener('click', () => {
        myMain.style.background = "yellow";
    })