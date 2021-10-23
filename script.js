var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let cardSuit = ['&#9829;', '&#9827;', '&#9830;' , '&#9824;'];

function drawRandomValue(cardValue) {
    var num = Math.floor(Math.random()*cardValue.length);
    return cardValue[num]
}
var suit;
function drawRandomSuit(cardSuit) {
    var type = Math.floor(Math.random()*cardSuit.length);
    return cardSuit[type]
}

function getPlayerHandValue() {
    var count = (playerHand.length);
    var sum = 0;
    for(var i = 0; i < count; i+=2)
    {
        sum += playerHand[i];
    }
    return sum;
}

function getDealerHandValue() {
    var count = (dealerHand.length);
    var sum = 0;
    for(var i = 0; i < count; i+=2)
    {
        sum += dealerHand[i];
    }
    return sum;
}

function startBlackjack() {
    playerHand = [drawRandomValue(cardValue), drawRandomSuit(cardSuit), drawRandomValue(cardValue), drawRandomSuit(cardSuit)]
    dealerHand = [drawRandomValue(cardValue), drawRandomSuit(cardSuit), drawRandomValue(cardValue), drawRandomSuit(cardSuit)]
    if(getPlayerHandValue() > 21){
        refresh();
    }
    if(getDealerHandValue() > 21){
        refresh();
    }
}

startBlackjack();

function disableButton() {
    document.getElementById("hit").disabled = true;
    document.getElementById("stay").disabled = true;
}

function hit() {
    playerHand.push(drawRandomValue(cardValue));
    playerHand.push(drawRandomSuit(cardSuit));
    document.getElementById("player-hand").innerHTML = playerHand;
    document.getElementById("player-hand-value").innerHTML = getPlayerHandValue();
    if(getPlayerHandValue() > 21){
        document.getElementById("result").innerHTML = "PLAYER: BUST!"
        disableButton();
        
    }

    if(getDealerHandValue() < getPlayerHandValue() && getDealerHandValue() < 15) {
        dealerHand.push(drawRandomValue(cardValue));
        dealerHand.push(drawRandomSuit(cardSuit));
        document.getElementById("dealer-hand").innerHTML = dealerHand;
        document.getElementById("dealer-hand-value").innerHTML = getDealerHandValue();
        if(getDealerHandValue() > 21){
            document.getElementById("result").innerHTML = "DEALER: BUST!"
            disableButton();
        }
    }
}

function stay() {
    while(getDealerHandValue() =< getPlayerHandValue() && getDealerHandValue() < 15) {
        dealerHand.push(drawRandomValue(cardValue));
        dealerHand.push(drawRandomSuit(cardSuit));
        document.getElementById("dealer-hand").innerHTML = dealerHand;
        document.getElementById("dealer-hand-value").innerHTML = getDealerHandValue();
        if(getDealerHandValue() > 21){
            document.getElementById("result").innerHTML = "DEALER: BUST!"
            disableButton();
        }
    }
    if(getPlayerHandValue() > getDealerHandValue() && getPlayerHandValue() <= 21) {
        document.getElementById("result").innerHTML = "PLAYER WINS!"
        disableButton();
    } else if((getPlayerHandValue() == getDealerHandValue() && getPlayerHandValue() <= 21)) {
        document.getElementById("result").innerHTML = "TIE!"
        disableButton();
    } else if(getDealerHandValue() > 21) {
        if(getPlayerHandValue > 21) {
            document.getElementById("result").innerHTML = "TIE!"
        } else {
            document.getElementById("result").innerHTML = "PLAYER WINS!"
            disableButton();
        }
    } else if(getPlayerHandValue() > 21) {
        if(getPlayerHandValue > 21) {
            document.getElementById("result").innerHTML = "TIE!"
        } else {
            document.getElementById("result").innerHTML = "DEALER WINS!"
            disableButton();
        }
    }
}

function refresh(){
    window.location.reload("Refresh")
}

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = getPlayerHandValue();

document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = getDealerHandValue();




