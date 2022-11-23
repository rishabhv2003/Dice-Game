var randomNumber1, randomNumber2
var image1, source, check = -1;
function func1() {
    check = 0;
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    source = "images/dice" + randomNumber1 + ".png";
    document.getElementsByClassName('img1')[0].setAttribute('src', source);
}
function func2() {
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
}
