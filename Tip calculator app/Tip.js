function calculateTip(){ 
    var billAmt = document.getElementById("billAmt").value;
    var numOfPeople = document.getElementById("numofpeople").value;
    document.getElementById("tip-per-person").innerHTML = billAmt / numOfPeople * 0.05
    document.getElementById("total").innerHTML = ((billAmt / numOfPeople) * 0.05) * numOfPeople
}

function calculateTip2(){ 
    var billAmt = document.getElementById("billAmt").value;
    var numOfPeople = document.getElementById("numofpeople").value;
    document.getElementById("tip-per-person").innerHTML = (billAmt / numOfPeople) * 0.10
    document.getElementById("total").innerHTML = ((billAmt / numOfPeople) * 0.10) * numOfPeople
}

function calculateTip3(){ 
    var billAmt = document.getElementById("billAmt").value;
    var numOfPeople = document.getElementById("numofpeople").value;
    document.getElementById("tip-per-person").innerHTML = billAmt / numOfPeople * 0.15
    document.getElementById("total").innerHTML = ((billAmt / numOfPeople) * 0.15) * numOfPeople
}

function calculateTip4(){ 
    var billAmt = document.getElementById("billAmt").value;
    var numOfPeople = document.getElementById("numofpeople").value;
    document.getElementById("tip-per-person").innerHTML = billAmt / numOfPeople * 0.25
    document.getElementById("total").innerHTML = ((billAmt / numOfPeople) * 0.25) * numOfPeople
}

function calculateTip5(){ 
    var billAmt = document.getElementById("billAmt").value;
    var numOfPeople = document.getElementById("numofpeople").value;
    document.getElementById("tip-per-person").innerHTML = billAmt / numOfPeople * 0.5
    document.getElementById("total").innerHTML = ((billAmt / numOfPeople) * 0.5) * numOfPeople
}

function calculateTipCustom(){ 
    var billAmt = document.getElementById("billAmt").value;
    var custom = document.getElementById("custom").value;
    document.getElementById("tip-per-person").innerHTML = (billAmt /numOfPeople) * custom
    document.getElementById("total").innerHTML = ((billAmt / numOfPeople) * custom) * numOfPeople
}
