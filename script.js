//Checking signup form validation

function nameValidation() {
    var namePattern = /^[A-z]{4,20}$/;
    var idForName = document.getElementById("namealert");
    var nameId = document.getElementById("name");
    var nameInput = document.getElementById("name").value;

    if (nameInput == "") {
        idForName.classList.remove("alertmsg");
        idForName.classList.add('alertmsg-show');
        idForName.innerHTML = "Please enter your name";
        nameId.style.borderBottom = "red solid 1px";
    } else if (nameInput != "") {
        if (namePattern.test(nameInput)) {
            idForName.classList.add('alertmsg');
            idForName.style.color = "darkgreen";
            idForName.innerHTML = "";
            nameId.style.borderBottom = "darkgreen solid 2px";
            return true;
        } else {
            idForName.innerHTML = "Please enter valid name";
            idForName.classList.remove("alertmsg");
            idForName.classList.add('alertmsg-show');
            nameId.style.borderBottom = "red solid 1px";
            idForName.style.color = "red";
            return false;
        }

    }

}

function emailValidation() {
    var emailPattern = /([a-z0-9\._]{4,25})@([a-z]{3,8}\.[a-z]{2,5})/;
    var idForEmail = document.getElementById("emailalert");
    var emailId = document.getElementById("email");
    var emailInput = document.getElementById("email").value;


    if (emailInput == "") {
        idForEmail.innerHTML = "Please enter your email";
        emailId.style.borderBottom = "red solid 1px";
    } else if (emailInput != "") {
        if (emailPattern.test(emailInput)) {
            idForEmail.classList.add('alertmsg');
            idForEmail.innerHTML = "";
            idForEmail.style.color = "darkgreen";
            emailId.style.borderBottom = "darkgreen solid 2px";
            return true;
        } else {
            idForEmail.innerHTML = "Enter Valid email";
            idForEmail.classList.remove('alertmsg');
            idForEmail.classList.add('alertmsg-show');
            emailId.style.borderBottom = "red solid 1px";
            idForEmail.style.color = "red";
            return false;
        }
    }

}

function passwordValidation() {
    var passwordPattern = /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/;
    var idForPassword = document.getElementById("passwordalert");
    var passwordId = document.getElementById("password");
    var passwordInput = document.getElementById("password").value;


    if (passwordInput == "") {
        idForPassword.innerHTML = "Please enter your Password";
        passwordId.style.borderBottom = "red solid 1px";
    } else if (passwordInput != "")
        if (passwordPattern.test(passwordInput)) {
            idForPassword.classList.add("alertmsg");
            passwordId.style.borderBottom = "darkgreen solid 2px";
            idForPassword.innerHTML = "Valid Password";
            idForPassword.style.color = "darkgreen";
            return true;
        } else {
            idForPassword.innerHTML = "Atleast one UpperCase,one Numeric,One Special Character and Length of eight";
            idForPassword.classList.remove('alertmsg');
            idForPassword.classList.add("alertmsg-show");
            passwordId.style.borderBottom = "red solid 1px";
            idForPassword.style.color = "red";
            return false;
        }
}

function passwordConfirmationValidation() {

    var idForPasswordConfirmation = document.getElementById("passwordConfirmationalert");
    var passwordConfirmationId = document.getElementById("passwordConfirmation");
    var passwordConfirmationInput = document.getElementById("passwordConfirmation").value;


    if (passwordConfirmationInput != document.getElementById("password").value) {
        idForPasswordConfirmation.classList.remove("alertmsg");
        idForPasswordConfirmation.classList.add("alertmsg-show");
        passwordConfirmationId.style.borderBottom = "red solid 1px";
        idForPasswordConfirmation.style.color = "red";
        return false;
    } else if (document.getElementById("password").value == "") {
        idForPasswordConfirmation.classList.remove("alertmsg");
        idForPasswordConfirmation.classList.add("alertmsg-show");
        idForPasswordConfirmation.innerHTML = "Confirm your Password";
        idForPasswordConfirmation.style.color = "red";
    } else {
        passwordConfirmationId.style.borderBottom = "darkgreen solid 2px";
        idForPasswordConfirmation.innerHTML = "Password matched";
        idForPasswordConfirmation.style.color = "darkgreen";
        return true;
    }
}

//Loading function for Signup validation
function loadfunc() {


    if (nameValidation() && emailValidation() && passwordValidation() && passwordConfirmationValidation()) {
        var url_values = {
            domainName: "http://127.0.0.1:5500/index.html?name=",
            nameValue: document.getElementById("name").value,
            emailValue: document.getElementById("email").value,
            passwordValue: document.getElementById("password").value,
            passwordConfirmationValue: document.getElementById("passwordConfirmation").value,
        }
        var url = url_values.domainName + url_values.nameValue + "&" + "email=" + url_values.emailValue + "&" + "password=" + url_values.passwordValue + "&" + "passwordConfirmation=" + url_values.passwordConfirmationValue;
        window.location.href = url;
    }

}

// Checking Login form Validation

function alertMsgForName() {
    var loginNamePattern = /^[A-z]{4,20}$/;
    var loginName = document.getElementById("loginName").value;

    if (loginName == "") {
        document.getElementById("loginName").style.borderBottom = "red solid 2px";
        document.getElementById("nameAlert").style.display = "block";
        document.getElementById("nameAlert").innerHTML = "Enter your name";
        return false;
    } else if (loginName != "") {
        if (loginNamePattern.test(loginName)) {
            document.getElementById("nameAlert").style.display = "none";
            document.getElementById("loginName").style.borderBottom = "black solid 1px";
            return true;
        } else {
            document.getElementById("nameAlert").innerHTML = "Enter valid name";
            document.getElementById("loginName").style.borderBottom = "red solid 2px";
            document.getElementById("nameAlert").style.display = "block";
            return false;
        }
    }
}

function alertMsgForPassword() {
    var loginPasswordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var loginPassword = document.getElementById("loginPassword").value;

    if (loginPassword == "") {
        document.getElementById("passwordAlert").innerHTML = "Enter your password";
        document.getElementById("loginPassword").style.borderBottom = "red solid 2px";
        document.getElementById("passwordAlert").style.display = "block";
        return false;
    } else if (loginPassword != "") {
        if (loginPasswordPattern.test(loginPassword)) {
            document.getElementById("passwordAlert").style.display = "none";
            document.getElementById("loginPassword").style.borderBottom = "black solid 1px";
            return true;
        } else {
            document.getElementById("passwordAlert").innerHTML = "Enter valid password";
            document.getElementById("loginPassword").style.borderBottom = "red solid 2px";
            document.getElementById("passwordAlert").style.display = "block"
            return false;
        }
    }
}

function loginSubmitLoader() {
    if (alertMsgForName() && alertMsgForPassword()) {
        window.location.href = "http://127.0.0.1:5500/index.html";
    }
}



//Side Navigation Bar Transitions in index.html
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "550px";
    document.body.style.backgroundColor = "#e7decc";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "white";
}

// //Checking Index.html page validation
function employeeIDValidation() {
    var employeeIDPattern = /[A-Z0-9]{4,16}/;
    var idforEmployee = document.getElementById("employeeIDAlert");
    var employeeID = document.getElementById("employeeID");
    var employeeIDinput = document.getElementById("employeeID").value;

    if (employeeIDinput == "") {
        idforEmployee.innerHTML = "Please enter your employee id";
        employeeID.style.border = "red solid 1px";
    } else if (employeeIDinput != "") {
        if (employeeIDPattern.test(employeeIDinput)) {
            idforEmployee.classList.add('msg-alert');
            idforEmployee.style.color = "darkgreen";
            idforEmployee.innerHTML = "";
            employeeID.style.border = "darkgreen solid 2px";
            return true;
        } else {
            idforEmployee.innerHTML = "Please enter valid ID";
            idforEmployee.classList.remove("msg-alert");
            idforEmployee.classList.add("show-msg");
            employeeID.style.border = "red solid 1px";
            idforEmployee.style.color = "red";
            return false;
        }
    }
}

function dateOfBirthValidation() {
    var dobinput = document.getElementById("dob").value;
    var dobid = document.getElementById("dob");
    var dobalert = document.getElementById("dobAlert");

    if (dobinput.length == 0) {
        dobid.style.border = "red solid 1px";
        dobalert.classList.add("show-msg");
        dobalert.innerHTML = "Please fill the field";
        dobalert.classList.remove("msg-alert");

    } else {
        dobid.style.border = "darkgreen solid 2px";
        dobalert.innerHTML = ""
    }
}

function addressValidation() {
    if (document.getElementById("address").value == "") {
        document.getElementById("address").style.border = "red solid 1px";
        document.getElementById("addressAlert").innerHTML = "Please enter your address";
        document.getElementById("addressAlert").classList.remove("msg-alert");
        document.getElementById("addressAlert").classList.add("show-msg");
    } else if (document.getElementById("address").value != "") {
        document.getElementById("addressAlert").innerHTML = "";
        document.getElementById("address").style.border = "darkgreen solid 2px";

    }
}

function joiningDateValidation() {
    var joiningDateInput = document.getElementById("joiningDate").value;
    var joiningDateid = document.getElementById("joiningDate");
    var joiningDatealert = document.getElementById("joiningDateAlert");

    if (joiningDateInput.length == 0) {
        joiningDateid.style.border = "red solid 1px";
        joiningDatealert.classList.add("show-msg");
        joiningDatealert.innerHTML = "Please fill the field";
        joiningDatealert.classList.remove("msg-alert");

    } else {
        joiningDateid.style.border = "darkgreen solid 2px";
        joiningDatealert.innerHTML = ""
    }
}


// AJAX




// function seatingNumberValidation () {
//     var seatingNumberPattern = /[\d]{2,5}/;
//     var idForSeatingNumber = document.getElementById("seatingNumberAlert");
//     var seatingNumberId = document.getElementById("seatingNumber");
//     var seatingNumberInput = document.getElementById("seatingNumber").value;

//     if(seatingNumberInput == ""){
//         idForSeatingNumber.innerHTML = "Please enter Seating Number";
//         seatingNumberId.style.border = "red solid 1px";
//     }

//     else if(seatingNumberInput !=""){
//         if(seatingNumberPattern.test(seatingNumberInput)) {
//             idForSeatingNumber.classList.add("msg-alert");
//             idForSeatingNumber.style.color = "darkgreen";
//             idForSeatingNumber.innerHTML = "";
//             seatingNumberId.style.border = "darkgreen solid 2px";
//             return true;
//     }
//         else {
//             idForSeatingNumber.innerHTML = "Please enter valid number";
//             idForSeatingNumber.classList.remove('msg-alert');
//             idForSeatingNumber.classList.add("show-msg");
//             seatingNumberId.style.borderBottom = "red solid 1px";
//             idForSeatingNumber.style.color = "red";
//             return false;
//         }
//     }
// }

// function laptopNumberValidation () {
//     var laptopNumberPattern = /^[A-Z0-9]{3,8}+$/;
//     var idForlaptopNumber = document.getElementById("LaptopNumberAlert");
//     var laptopNumberId = document.getElementById("laptopNumber");
//     var laptopNumberInput = document.getElementById("laptopNumber").value;


//     if(laptopNumberInput == ""){
//         idForlaptopNumber.innerHTML = "Please enter Laptop Number";
//         laptopNumberId.style.borderBottom = "red solid 1px";
//     }

//     else if (laptopNumberInput != ""){
//         if(laptopNumberPattern.test(laptopNumberInput)) {
//             idForlaptopNumber.classList.add("msg-alert");
//             idForlaptopNumber.innerHTML = "";
//             laptopNumberId.style.border = "darkgreen solid 2px";
//             return true;
//     }
//         else {
//             idForlaptopNumber.innerHTML = "Please enter valid number";
//             idForlaptopNumber.classList.remove('msg-alert');
//             idForlaptopNumber.classList.add("show-msg");
//             laptopNumberId.style.borderBottom = "red solid 1px";
//             idForSeatingNumber.style.color = "red";
//             return false;
//     }
// }

// }


// function projectTypeValidation () {
//     var typeOfProjectPattern = /^[A-Za-z]{8,20}+$/;
//     var idForProjectType = document.getElementById("typeOfProjectAlert");
//     var ProjectTypeId = document.getElementById("typeOfProject");
//     var ProjectTypeInput = document.getElementById("typeOfProject").value;

//     if(ProjectTypeId == ""){
//         idForProjectType.innerHTML = "Please enter your project type";
//         ProjectTypeId.style.border = "red solid 1px";
//     }

//     else if(ProjectTypeInput != ""){
//         if(typeOfProjectPattern.test(ProjectTypeInput)) {
//             idForProjectType.classList.add('msg-alert');
//             idForProjectType.style.color = "darkgreen";
//             idForProjectType.innerHTML = "";
//             ProjectTypeId.style.border = "darkgreen solid 2px";
//             return true;
//         }
//         else {
//             idForProjectType.classList.remove('msg-alert');
//             idForProjectType.classList.add("show-msg");
//             ProjectTypeId.style.borderBottom = "red solid 1px";
//             idForProjectType.style.color = "red";
//             return false;
//         }
//     }
// }

// function toolsTypeValidation () {
//     var toolsPattern = /^[A-Za-z0-9]{8,20}+$/;
//     var idForTools = document.getElementById("typeOfProjectAlert");
//     var toolsId = document.getElementById("typeOfProject");
//     var toolsInput = document.getElementById("typeOfProject").value;


//     if(toolsInput == ""){
//         idForTools.innerHTML = "Please enter the tools";
//         toolsId.style.border = "red solid 1px";
//     }

//     else if(toolsInput != "") {
//         if(toolsPattern.test(toolsInput)) {
//             idForTools.classList.add("msg-alert");
//             idForTools.innerHTML = "";
//             toolsId.style.border = "darkgreen solid 2px";
//             return true;
//         }
//         else {
//             idForTools.innerHTML = "Please enter valid characters"
//             idForTools.classList.remove('msg-alert');
//             idForTools.classList.add("show-msg");
//             toolsId.style.borderBottom = "red solid 1px";
//             idForTools.style.color = "red";
//             return false;
//         }
//     }
// }






// function alertmsg () {
//     var nameId = document.getElementById("loginName").value;
//     var pwdAlert = document.getElementById("loginPassword").value;

//     if (nameId == "") {
//         document.getElementById("nameAlert").style.display = "block";
//     }
//     else {
//         document.getElementById("nameAlert").style.display = "none";
//     }
//     if(pwdAlert == "") {
//         document.getElementById("passwordAlert").style.display = "block";
//     }
//     else {
//         document.getElementById("passwordAlert").style.display = "none";
//     }

// }







// var page_one = document.getElementById("page_one");
// function eventHandler(event) {
//     event.preventDefault();
// }

// page_one.addEventListener('submit', eventHandler);

// function nextpage () {
//     var page_one = document.getElementById("page_one");
//     page_one.classList.add("hide-form");

//     var page_two = document.getElementById("page_two");
//     page_two.classList.add("hide-form");

//     var page_three = document.getElementById("page_three");
//     page_three.classList.remove("hide-form");
// }
// const btn = document.querySelector('#button');        
//         const radioButtons = document.querySelectorAll('input[name="gender"]');
//         btn.addEventListener("click", () => {
//             let selectedbtn;
//             for (const radioButton of radioButtons) {
//                 if (radioButton.checked) {
//                     selectedbtn = radioButton.value;
//                     break;
//                 }
//                 else {
//                     document.getElementById("radiobtns-alert").add("show-msg");
//                     document.getElementById("radiobtns-alert").remove("msg-alert");
//                     document.getElementById("radiobtns-alert").innerHTML = "Select one of them";
//                     document.getElementById("radiobtns-alert").style.color = red;
//                 }
//             }
//         });