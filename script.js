var randomNumber1, randomNumber2
var image1, source, check1 = 1, check2 = -1;



function func1() {
    if (check1 == -1) {
        alert("you can not move player 1");
        return;
    }
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    source = "images/dice" + randomNumber1 + ".png";
    document.getElementsByClassName('img1')[0].setAttribute('src', source);
    check1 = -1;
}

function func2() {
    if (check1 == 1) {
        alert("you can not move player 2");
        return;
    }
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    source = "images/dice" + randomNumber2 + ".png";
    document.getElementsByClassName('img2')[0].setAttribute('src', source);
    if (randomNumber1 == randomNumber2) {
        document.getElementsByClassName('result')[0].innerHTML = "Draw";
    }
    else if (randomNumber1 > randomNumber2) {
        document.getElementsByClassName('result')[0].innerHTML = "player 1 wins";
    }
    else {
        document.getElementsByClassName('result')[0].innerHTML = "Player 2 wins";
    }
    check1 = 1;
}