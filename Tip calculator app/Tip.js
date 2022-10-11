const custom = document.getElementById("custom");
const tip_per_person = document.getElementById("tip-per-person");
const total = document.getElementById("total");
const billAmt = document.getElementById("billAmt");
const numOfPeople = document.getElementById("numofpeople");

custom.oninput = function(ev) {
    const value = ev.target.value / 100;
    calculateTip(value);
}


function calculateTip(percentage) {
    const billAmt = billAmt.value;
    const numOfPeople = numOfPeople.value;
    const tip = billAmt / numOfPeople * percentage;
    const total = tip * numOfPeople;

    tip_per_person.innerHTML = tip.toFixed(2);
    total.innerHTML = total.toFixed(2);
}

function reset() {
    billAmt.value = "";
    numOfPeople.value = "";
    tip_per_person.innerHTML = "0.00";
    total.innerHTML = "0.00";
}
