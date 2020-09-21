function RevealMsg() {
    document.getElementById("hidden").style.display = 'block';
}

function CountDown() {
    var currentVal = document.getElementById("countdownBTN").innerHTML;
    var newVal = 0;
    if (currentVal > 0) {
        newVal = currentVal - 1;
    }
    document.getElementById("countdownBTN").innerHTML = newVal;
}

function logoClick() {
    alert("Con el lapiz no TMM!");

}