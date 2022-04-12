document.cookie = 'authorization = eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6Ijg4YjA4YjYwLTI5YzgtNDBkOC05OTZjLWJkMGU4YmU2YTc3MCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5NzM4NzUyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDk3NDIzNTIsImlhdCI6MTY0OTczODc1MiwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.Mw3VzKN5ZH3K6Cotq_74XIAPW4pdPR4A0ORo-b06JsvMNO6TS2J-Y-KlTC9gas_qA-yNujtE9nVYol4XabCodi_ewERhF4cKLfkSJyHW4zWGYMWHi-T07Obr3PSLiZGTPHbKu-jR6G4q2AqTsQZJorR9BuB5lvHV_vg725iXR5m7YBJ59KBqgcuF1mKZVMKAtxzo8MUqWb_NHNirMcJzcNoljr6J_WWRWwmWHp7m1qgj29zxjseGeGzwnQBOrc7OY-6p9oQNaM1wT43awkkkTZei-Kp4NLnfOfzAUsIuIpG7yo395X228kGV5ZhAYFB7mVY42THnJaooo6PIYoHhaA'
var authorization_token = "Bearer eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6Ijg4YjA4YjYwLTI5YzgtNDBkOC05OTZjLWJkMGU4YmU2YTc3MCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5NzM4NzUyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDk3NDIzNTIsImlhdCI6MTY0OTczODc1MiwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.Mw3VzKN5ZH3K6Cotq_74XIAPW4pdPR4A0ORo-b06JsvMNO6TS2J-Y-KlTC9gas_qA-yNujtE9nVYol4XabCodi_ewERhF4cKLfkSJyHW4zWGYMWHi-T07Obr3PSLiZGTPHbKu-jR6G4q2AqTsQZJorR9BuB5lvHV_vg725iXR5m7YBJ59KBqgcuF1mKZVMKAtxzo8MUqWb_NHNirMcJzcNoljr6J_WWRWwmWHp7m1qgj29zxjseGeGzwnQBOrc7OY-6p9oQNaM1wT43awkkkTZei-Kp4NLnfOfzAUsIuIpG7yo395X228kGV5ZhAYFB7mVY42THnJaooo6PIYoHhaA";

function getMethod() {
    getMethodForEmployeeName();
    getMethodForPaymentType();
    getMethodForPaymentMethod();
    getMethodForCurrency();
}

function getMethodForEmployeeName() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/ec/employees", true);
    console.log(xhttp);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("authorization", authorization_token);
    xhttp.setRequestHeader("identity", authorization_token);
    xhttp.setRequestHeader("companyId", "14");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (xhttp.status == 200) {
            if (xhttp.readyState == 4) {

                var json = JSON.parse(this.responseText);
                console.log(json);
                console.log(json.dropdownList[0].name);
                console.log(json.dropdownList.length);
                for (i = 0; i < json.dropdownList.length; i++) {
                    //Get options for Employee dropdown
                    var createOptionsForName = document.createElement("option");
                    createOptionsForName.setAttribute("value", json.dropdownList[i].id);
                    // createOptionsForName.setAttribute("id", json.dropdownList[i].id)
                    createOptionsForName.innerHTML = json.dropdownList[i].name;
                    document.getElementById("employee").appendChild(createOptionsForName);

                }
            }
        } else {
            alert("Couldn't load data from server")
        }

    }
}

function getMethodForPaymentType() {
    var json = {
        "code": "0",
        "message": "Ledger templates details are retrieved successfully",
        "messageArgs": null,
        "ledgerTemplates": [{
            "id": 170,
            "code": "1",
            "name": "Faktura",
            "value": "1 - Faktura"
        }]
    }
    console.log(json);
    var createOptionsForPaymentType = document.createElement("option");
    createOptionsForPaymentType.setAttribute("value", json.ledgerTemplates[0].id);
    createOptionsForPaymentType.innerHTML = json.ledgerTemplates[0].name;
    // createOptionsForPaymentType.setAttribute("id", json.ledgerTemplates[0].id)
    document.getElementById("paymentType").appendChild(createOptionsForPaymentType);


}

function getMethodForPaymentMethod() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/ec/paymentMethod", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("authorization", authorization_token);
    xhr.setRequestHeader("companyId", "14");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.status == 200) {
            if (xhr.readyState == 4) {
                var json = JSON.parse(this.responseText);
                console.log(json);
                for (let i = 0; i < json.dropdownList.length; i++) {
                    var createOptionsForPaymentMethod = document.createElement("option");
                    createOptionsForPaymentMethod.setAttribute("value", json.dropdownList[i].id);
                    // createOptionsForPaymentMethod.setAttribute("id", json.dropdownList[i].id)
                    createOptionsForPaymentMethod.innerHTML = json.dropdownList[i].name;
                    document.getElementById("paymentMethod").appendChild(createOptionsForPaymentMethod);
                }
            }
        } else {
            alert("Couldn't load data from server")
        }
    }
}

function getMethodForCurrency() {
    var xmlreq = new XMLHttpRequest();
    xmlreq.open("GET", "http://localhost/ec/currencies", true);
    xmlreq.setRequestHeader("Content-type", "application/json");
    xmlreq.setRequestHeader("authorization", authorization_token);
    xmlreq.setRequestHeader("companyId", "14");
    xmlreq.send();
    xmlreq.onreadystatechange = function() {
        if (xmlreq.status = 200) {
            if (xmlreq.readyState == 4) {
                var json = JSON.parse(this.responseText);
                console.log(json);
                for (let i = 0; i < json.currencyList.length; i++) {
                    var createOptionsForCurrency = document.createElement("option");
                    createOptionsForCurrency.setAttribute("value", json.currencyList[i].currencyCode);
                    createOptionsForCurrency.innerHTML = json.currencyList[i].currencyName;
                    document.getElementById("currency").appendChild(createOptionsForCurrency);
                    console.log(json.currencyList[i].currencyName)
                }
                console.log(document.getElementById("currency").children[1]);

            }
        }
    }

}
//Post Method
function postMethod() {
    function payoutWithSalarybox() {
        if (document.getElementById("payoutWithSalary").checked) {
            payoutWithSalarybox.value = "Yes";
            return true;
        } else {
            payoutWithSalary.value = "No";
            return false;
        }
    }
    var postDetails = {
        "attachments": [],
        "amount": document.getElementById("totalAmt").value,
        "currency": {
            "currencyCode": document.getElementById("currency").value,
        },
        "employee": {
            "userId": document.getElementById("employee").value,
        },
        "paymentType": {
            "id": document.getElementById("paymentType").value,
        },
        "paymentMethod": {
            "id": document.getElementById("paymentMethod").value,
        },
        "invoiceDate": document.getElementById("paymentDate").value,
        "name": document.getElementById("ExpenseName").value,
        "notes": "",
        "payoutWithSalary": payoutWithSalarybox(),
        "lineItems": [],
        "dimensions": []
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/ec/expense", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("authorization", authorization_token);
    xhttp.setRequestHeader("companyId", "14");

    var postData = JSON.stringify(postDetails);
    xhttp.onreadystatechange = function() {
        if (xhttp.status == 200) {
            if (xhttp.readyState == 4) {
                var request = JSON.parse(xhttp.responseText);
                console.log(request);
                console.log(request.expense["employee"].name);
                window.location.href = "http://localhost/expense/display.html";

            }
        } else {
            alert("Error");
        }
    }
    xhttp.send(postData);
}

function getData() {
    var creatxmlrequest = new XMLHttpRequest();
    creatxmlrequest.open("POST", "http://localhost/ec/expenses/stage/Inbox?count=10&offset=0", true);
    creatxmlrequest.setRequestHeader("Content-type", "application/json");
    creatxmlrequest.setRequestHeader("authorization", authorization_token);
    creatxmlrequest.setRequestHeader("companyId", "14");
    creatxmlrequest.onload = function() {
        console.log(this.responseText);
        var json = JSON.parse(this.responseText);
        console.log(json);
        console.log(json.expenses[0].employee["name"]);
        console.log(json.expenses[0].name)
        console.log(json.expenses[0].amount)
        for (let i = 0; i < json.expenses.length; i++) {
            document.getElementById("postedEmployeeID").innerHTML = json.expenses[i].employee["userId"];
            document.getElementById("postedEmployeeName").innerHTML = json.expenses[i].employee["name"];
            document.getElementById("postedExpenseID").innerHTML = json.expenses[i].id;
            document.getElementById("postedExpense").innerHTML = json.expenses[i].name;
            document.getElementById("postedTotalAmt").innerHTML = json.expenses[i].amount;
            document.getElementById("postedPaymentDate").innerHTML = json.expenses[i].invoiceDate;
            document.getElementById("postedCurrencyName").innerHTML = json.expenses[i].currency["currencyName"];
            document.getElementById("postedCurrencyCode").innerHTML = json.expenses[i].currency["currencyCode"];
            var items = document.getElementById("cardContainer");
            var clone = items.cloneNode(true);
            document.getElementById("cardGrid").appendChild(clone);
        }

    }
    var obj = {}
    creatxmlrequest.send(JSON.stringify(obj));
}

function openForm(element) {
    var openForm = document.getElementById("editData");
    openForm.style.display = "block";
    editData(element);
}

function closeform() {
    var closeform = document.getElementById("editData");
    closeform.style.display = "none";
}

function editData(element) {
    console.log(element);
    var parent = element.parentNode.parentNode;
    console.log(parent);
    var employeeID = parent.children[0];
    var employeeIDInForm = employeeID.children[1].innerHTML;
    document.getElementById("IDOfEmployee").value = employeeIDInForm;

    var employeeName = parent.children[1];
    var employeeInForm = employeeName.children[1].innerHTML;
    document.getElementById("nameOfEmployee").value = employeeInForm;

    var expenseID = parent.children[2];
    var expenseIDInForm = expenseID.children[1].innerHTML;
    document.getElementById("IDOfExpense").value = expenseIDInForm;

    var expenseName = parent.children[3];
    var expenseNameInForm = expenseName.children[1].innerHTML;
    document.getElementById("nameOfExpense").value = expenseNameInForm;

    var paymentDate = parent.children[4];
    var paymentDateInForm = paymentDate.children[1].innerHTML;
    document.getElementById("dateOfPayment").value = paymentDateInForm;

    var totalAmount = parent.children[5];
    var totalAmountInForm = totalAmount.children[1].innerHTML;
    document.getElementById("Amount").value = totalAmountInForm;

    var currencyName = parent.children[6];
    var currencyNameInForm = currencyName.children[1].innerHTML;
    console.log(currencyNameInForm)
    document.getElementById("nameOfCurrency").value = currencyNameInForm;

    var currencyCode = parent.children[7];
    var currencyCodeInForm = currencyCode.children[1].innerHTML;
    document.getElementById("nameOfCurrencyCode").value = currencyCodeInForm;
}

function updateData() {
    var ID = document.getElementById("IDOfExpense").value;
    console.log(ID);
    var url = "http://localhost/ec/expense?id=" + ID;
    console.log(url)
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("companyId", "14")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", authorization_token);

    var data = {
        "attachments": [],
        "amount": document.getElementById("Amount").value,
        "currency": {
            "currencyCode": document.getElementById("nameOfCurrencyCode").value,
        },
        "employee": {
            "userId": document.getElementById("IDOfEmployee").value,
        },
        "paymentType": {
            "id": 170
        },
        "paymentMethod": {
            "id": 2
        },
        "invoiceDate": document.getElementById("dateOfPayment").value,
        "name": document.getElementById("nameOfExpense").value,
        "hasImage": true,
        "imageBase64": "",
        "isActive": true,
        "notes": "Test notes",
        "payoutWithSalary": null,
        "lineItems": [],
        "dimensions": []
    }
    xhr.onreadystatechange = function() {
        if (xhr.status == 200) {
            if (xhr.readyState == 4) {
                getData();
                closeform();
                alert("Updated Successfully");
            }
        } else {
            alert("Couldn't update content")
        }
    }
    var json = JSON.stringify(data);
    xhr.send(json);
}

function deleteData(element) {
    var parent = element.parentNode.parentNode;
    var getID = parent.children[2];
    var ID = getID.children[1].innerHTML;


    var url = "http://localhost/ec/expense/" + ID
    var xml = new XMLHttpRequest();
    xml.open("DELETE", url, true);
    xml.setRequestHeader("Accept", "application/json");
    xml.setRequestHeader("companyId", "14")
    xml.setRequestHeader("Content-Type", "application/json");
    xml.setRequestHeader("Authorization", authorization_token);
    xml.onreadystatechange = function() {
        if (xml.status == 200) {
            if (xml.readyState == 4) {
                alert("Deleted Successfully");
                getData();
            }

        } else {
            alert("Unable to delete");
            console.log(xml.readyState)
            console.log(xml.status)
        }
    }
    xml.send();
}