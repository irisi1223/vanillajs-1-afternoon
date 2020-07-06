const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput')

function setCard(){
    console.log(idInput.value)
    const card = document.getElementById(idInput.value);
    console.log(card);
    card.style.color = colorInput.value;
}