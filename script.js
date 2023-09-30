function roll()
{
    return Math.floor(Math.random()*6) + 1;
}

function rollDice()
{
    const dice1Val = roll();
    const dice2Val = roll();
    const total = dice1Val + dice2Val;

    document.getElementById('dice 1').innerText = dice1Val;
    document.getElementById('dice 2').innerText = dice2Val;
    document.getElementById('total').innerText = total;
}

document.getElementById("RollDice").addEventListener("click", rollDice);
