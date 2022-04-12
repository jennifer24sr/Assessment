function employeeNameValidation() {
    var employeeValue = document.getElementById("employee").value;
    console.log(employeeValue)
    if (employeeValue == "Select") {
        document.getElementById("employeeAlert").classList.remove("alert-msg")
        document.getElementById("employeeAlert").innerHTML = "Please select a option";
        document.getElementById("employeeAlert").classList.add("show-alert")
    } else {
        document.getElementById("employee").style.border == "1px solid green";
        document.getElementById("employeeAlert").classList.remove("show-alert")
        document.getElementById("employeeAlert").classList.add("alert-msg")
    }
}

function expenseNameValidation() {
    var expenseName = document.getElementById("ExpenseName").value;
    console.log(expenseName);
    if (expenseName == "") {
        document.getElementById("expenseAlert").classList.remove("alert-msg")
        document.getElementById("expenseAlert").innerHTML = "Please fill the field";
        document.getElementById("expenseAlert").classList.add("show-alert")
    } else {
        document.getElementById("ExpenseName").style.border == "1px solid green";
        document.getElementById("expenseAlert").classList.remove("show-alert")
        document.getElementById("expenseAlert").classList.add("alert-msg")
    }
}

function paymentTypeValidation() {
    var paymentType = document.getElementById("paymentType").value;
    console.log(paymentType);
    if (paymentType == "Select") {
        document.getElementById("paymentTypeAlert").classList.remove("alert-msg")
        document.getElementById("paymentTypeAlert").innerHTML = "Please select a option";
        document.getElementById("paymentTypeAlert").classList.add("show-alert")
    } else {
        document.getElementById("paymentType").style.border == "1px solid green";
        document.getElementById("paymentTypeAlert").classList.remove("show-alert")
        document.getElementById("paymentTypeAlert").classList.add("alert-msg")
    }
}

function paymentMethodValidation() {
    var paymethod = document.getElementById("paymentMethod").value;
    console.log(paymethod);
    if (paymethod == "Select") {
        document.getElementById("paymentMethodAlert").classList.remove("alert-msg")
        document.getElementById("paymentMethodAlert").innerHTML = "Please select a option";
        document.getElementById("paymentMethodAlert").classList.add("show-alert")
    } else {
        document.getElementById("paymentMethod").style.border == "1px solid green";
        document.getElementById("paymentMethodAlert").classList.remove("show-alert")
        document.getElementById("paymentMethodAlert").classList.add("alert-msg")
    }
}

function paymentDateValidation() {
    var paymentDate = document.getElementById("paymentDate").value;
    console.log(paymentDate)
    if (paymentDate == "") {
        document.getElementById("paymentDateAlert").classList.remove("alert-msg")
        document.getElementById("paymentDateAlert").innerHTML = "Please fill the field";
        document.getElementById("paymentDateAlert").classList.add("show-alert")
    } else {
        document.getElementById("paymentDate").style.border == "1px solid green";
        document.getElementById("paymentDateAlert").classList.remove("show-alert")
        document.getElementById("paymentDateAlert").classList.add("alert-msg")
    }
}

function totalAmtValidation() {
    var totAmt = document.getElementById("totalAmt").value;
    console.log(totAmt)
    if (totAmt == 0 || totAmt == 0.00) {
        document.getElementById("totalAmtAlert").classList.remove("alert-msg")
        document.getElementById("totalAmtAlert").innerHTML = "Please fill the field";
        document.getElementById("totalAmtAlert").classList.add("show-alert")
    } else {
        document.getElementById("totalAmt").style.border == "1px solid green";
        document.getElementById("totalAmtAlert").classList.remove("show-alert")
        document.getElementById("totalAmtAlert").classList.add("alert-msg")
    }
}

function currencyValidation() {
    var currency = document.getElementById("currency").value;
    console.log(currency);
    if (currency == "Select") {
        document.getElementById("currencyAlert").classList.remove("alert-msg")
        document.getElementById("currencyAlert").innerHTML = "Please fill the field";
        document.getElementById("currencyAlert").classList.add("show-alert")
    } else {
        document.getElementById("currency").style.border == "1px solid green";
        document.getElementById("currencyAlert").classList.remove("show-alert")
        document.getElementById("currencyAlert").classList.add("alert-msg")
    }
}