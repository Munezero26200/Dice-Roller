const diceArea= document.getElementById("diceResult");
const diceButton= document.getElementById("btn");

diceButton.addEventListener('click',()=>{
    const randomNum= Math.floor(Math.random()*6)+1;
    diceArea.textContent=randomNum;
})