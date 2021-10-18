let sum = 0;
let arr_card = [];
console.log(sum);
let hasBlackjack = false;
let isAlive = false;
let massage = ""
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");
let total = document.querySelector("#total");
let card = document.getElementById("card");
let newCard = document.getElementById("newCard");
console.log(arr_card)

function getRandomcard() {
    var x = Math.floor((Math.random() * 13) + 1);
    return x;
}

function start() {

    isAlive = true;
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    arr_card = [firstCard, secondCard]
    console.log(arr_card)
    sum = firstCard + secondCard;

    startGame();

}

function startGame() {

    total.textContent = "Sum: " + sum;
    card.textContent = "Cards: "
    for (let i = 0; i < arr_card.length; i++) {
        card.textContent += arr_card[i] + " ";
    }

    if (sum <= 20) {

        massage = "Do you want to draw new card?";

        // alert(massage);
    } else if (sum === 21) {

        massage = "wohoo!,you got blackjack!";
        // alert(massage)
        hasBlackjack = true;

    } else {

        massage = "you are out of the game";
        // alert(massage)
        isAlive = false;
    }
    msg.textContent = massage;
}

function btn_card() {

    if (isAlive == true && hasBlackjack == false) {
        let drawCard = getRandomcard();
        sum += drawCard;
        arr_card.push(drawCard);
        startGame()
    } else {
        alert("you can not get more card!")
    }
}