const custom = document.getElementById("custom");

custom.oninput = function(ev) {
    const value = ev.target.value / 100;
    calculateTip(value);
}

function calculateTip(percentage) {
    const billAmt = document.getElementById("billAmt").value;
    const numOfPeople = document.getElementById("numofpeople").value;
    const tip = billAmt / numOfPeople * percentage;
    const total = tip * numOfPeople;
    document.getElementById("tip-per-person").innerHTML = tip.toFixed(2);
    document.getElementById("total").innerHTML = total.toFixed(2);
}
