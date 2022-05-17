var diceSides = 6
document.querySelector('.button').addEventListener('click',rollDice)
var dice1,dice2,dice3;

function rollDice()
{
    dice1 = Math.floor((Math.random()* diceSides)+1)
    dice2 = Math.floor((Math.random()* diceSides)+1)
    dice3 = Math.floor((Math.random()* diceSides)+1)

    document.querySelector('#firsts').innerText = dice1
    document.querySelector('#seconds').innerText = dice2
    document.querySelector('#thirds').innerText = dice3


    if(firsts.innerText > seconds.innerText && firsts.innerText > thirds.innerText)
    {
        document.querySelector('#score').innerText = firsts.innerText
    }
    else if(seconds.innerText > firsts.innerText && seconds.innerText > thirds.innerText)
    {
        document.querySelector('#score').innerText = seconds.innerText   
    }
    else if(firsts.innerText === seconds.innerText || firsts.innerText === thirds.innerText)
    {
        document.querySelector('#score').innerText = "Tie"
    }
    else
    {
        document.querySelector('#score').innerText = thirds.innerText
    }

    console.log(dice1,dice2,dice3)
}