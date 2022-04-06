function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openupdateForm(element) {
    document.getElementById("Form").style.display = "block";
    getData(element);
}

function closeupdateForm() {
    document.getElementById("Form").style.display = "none";
}


function xmlreq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("Get", "https://gorest.co.in/public/v2/users", true);
    // xhttp.setRequestHeader("Authorization", "Bearer 3aad7f72f8fb16421f6e19b34ef2fc6041389aa66b64a9e79cd44bc1767811d3")
    xhttp.send();
    console.log(xhttp);
    xhttp.onload = function() {
        console.log(this);
        var json = JSON.parse(this.responseText);
        console.log(json);
        for (let item = 0; item < json.length; item++) {
            document.getElementById("myID").innerHTML = json[item].id;
            document.getElementById("name").innerHTML = json[item].name;
            document.getElementById("email").innerHTML = json[item].email;
            document.getElementById("gender").innerHTML = json[item].gender;
            document.getElementById("status").innerHTML = json[item].status;
            var items = document.getElementById("card");
            var cln = items.cloneNode(true);
            document.getElementById("cards-grid").appendChild(cln);
        }
    }
}

function postMethod() {
    var name = document.getElementById("formName").value;
    var email = document.getElementById("formEmail").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://gorest.co.in/public/v2/users", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer 3aad7f72f8fb16421f6e19b34ef2fc6041389aa66b64a9e79cd44bc1767811d3");
    var object = {
        name: name,
        email: email,
        gender: "female",
        status: "active"
    }
    var formDetails = JSON.stringify(object);
    xhttp.onload = function() {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            var request = JSON.parse(xhttp.responseText);
            console.log(request);
            xmlreq();
        }
    }


    xhttp.send(formDetails);

}

function getData(element) {
    var parentnode = element.parentNode.parentNode;
    console.log(parentnode.children[0]);
    var IDchild = parentnode.children[0];
    IDchildValue = IDchild.children[0].innerHTML;
    console.log(IDchildValue);
    document.getElementById("userID").value = IDchildValue;
    var nameChild = parentnode.children[1];
    nameChildValue = nameChild.children[0].innerHTML;
    document.getElementById("UpdateformName").value = nameChildValue;
    var emailChild = parentnode.children[2];
    emailChildValue = emailChild.children[0].innerHTML;
    document.getElementById("UpdateformEmail").value = emailChildValue;
}


function patchMethod() {
    var ID = document.getElementById('userID').value;
    console.log(ID);
    var myname = document.getElementById("UpdateformName").value;
    console.log(myname);
    var myemail = document.getElementById("UpdateformEmail").value;
    var url = "https://gorest.co.in/public/v2/users/" + ID;
    console.log(url)

    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", url, true);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer 3aad7f72f8fb16421f6e19b34ef2fc6041389aa66b64a9e79cd44bc1767811d3")

    var data = {
        name: myname,
        email: myemail,
        gender: "female"
    };
    console.log(data.name);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xmlreq();
            closeupdateForm();
        } else {
            alert("Error");
        }
    };

    jsonobj = JSON.stringify(data);
    console.log(jsonobj);

    xhr.send(jsonobj);
}

function deleteMethod(element) {
    var parentnode = element.parentNode.parentNode;
    console.log(parentnode.children[0]);
    var IDchild = parentnode.children[0];
    IDchildValue = IDchild.children[1].innerHTML;
    console.log(IDchildValue)
    var url = "https://gorest.co.in/public/v2/users/" + IDchildValue;
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Authorization", "Bearer 3aad7f72f8fb16421f6e19b34ef2fc6041389aa66b64a9e79cd44bc1767811d3")
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 204) {
                alert("Deleted successfully");
                xmlreq();
            } else {
                alert(xhttp.status);
            }

        }
    }
    xhttp.send();

}