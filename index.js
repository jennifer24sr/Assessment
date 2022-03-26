// Checking Index.html page validation
function employeeIDValidation () {
    var employeeIDPattern = /[A-Z0-9]{4,16}/;
    var idforEmployee = document.getElementById("employeeIDAlert");
    var employeeID = document.getElementById("employeeID");
    var employeeIDinput = document.getElementById("employeeID").value;

    if(employeeIDinput == ""){
        employeeID.style.border = "red solid 1px";
        idforEmployee.innerHTML = "Please enter your employee id";
    }
    else if(employeeIDinput != ""){
        if(employeeIDPattern.test(employeeIDinput)){
            idforEmployee.classList.add('msg-alert');
            idforEmployee.style.color = "lightgreen";
            idforEmployee.innerHTML = "";
            employeeID.style.border = "lightgreen solid 2px";
            return true;
        }
        else{
            idforEmployee.innerHTML = "Please enter valid ID";
            idforEmployee.classList.remove("msg-alert");
            idforEmployee.classList.add("show-msg");
            employeeID.style.border ="red solid 1px";
            idforEmployee.style.color = "red";
            return false;
        }
    }
}

function dateOfBirthValidation () {
    var dobinput = document.getElementById("dob").value;
    var dobid = document.getElementById("dob");
    var dobalert = document.getElementById("dobAlert");

    if(dobinput.length == 0){
        dobid.style.border = "red solid 1px";
        dobalert.classList.add("show-msg");
        dobalert.innerHTML = "Please fill the field";
        dobalert.classList.remove("msg-alert");

    }
    else {
        dobid.style.border = "lightgreen solid 2px";
        dobalert.innerHTML = ""
    }
}

function addressValidation () {
    if(document.getElementById("address").value == ""){
        document.getElementById("address").style.border = "red solid 1px";
        document.getElementById("addressAlert").innerHTML = "Please enter your address";
        document.getElementById("addressAlert").classList.remove("msg-alert");
        document.getElementById("addressAlert").classList.add("show-msg");
    }
    else if(document.getElementById("address").value !=""){
        document.getElementById("addressAlert").innerHTML = "";
        document.getElementById("address").style.border = "lightgreen solid 2px";

    }
}
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

function joiningDateValidation () {
    var joiningDateInput = document.getElementById("joiningDate").value;
    var joiningDateid = document.getElementById("joiningDate");
    var joiningDatealert = document.getElementById("joiningDateAlert");

    if(joiningDateInput.length == 0){
        joiningDateid.style.border = "red solid 1px";
        joiningDatealert.classList.add("show-msg");
        joiningDatealert.innerHTML = "Please fill the field";
        joiningDatealert.classList.remove("msg-alert");

    }
    else {
        joiningDateid.style.border = "lightgreen solid 2px";
        joiningDatealert.innerHTML = ""
    }
}

function seatingNumberValidation () {
    var seatingNumberPattern = /[0-9]{2,5}/;
    var idForSeatingNumber = document.getElementById("seatingNumberAlert");
    var seatingNumberId = document.getElementById("seatingNumber");
    var seatingNumberInput = document.getElementById("seatingNumber").value;

    if(seatingNumberInput == ""){
        idForSeatingNumber.innerHTML = "Please enter Seating Number";
        seatingNumberId.style.border = "red solid 1px";
    }
    
    else if(seatingNumberInput !=""){
        if(seatingNumberPattern.test(seatingNumberInput)) {
            idForSeatingNumber.classList.add("msg-alert");
            idForSeatingNumber.style.color = "lightgreen";
            idForSeatingNumber.innerHTML = "";
            seatingNumberId.style.border = "lightgreen solid 2px";
            return true;
         }
        else {
            idForSeatingNumber.innerHTML = "Please enter valid number";
            idForSeatingNumber.classList.remove('msg-alert');
            idForSeatingNumber.classList.add("show-msg");
            seatingNumberId.style.borderBottom = "red solid 1px";
            idForSeatingNumber.style.color = "red";
            return false;
        }
    }
}

function laptopNumberValidation () {
    var laptopNumberPattern = /[A-Z0-9]{3,8}/;
    var idForlaptopNumber = document.getElementById("LaptopNumberAlert");
    var laptopNumberId = document.getElementById("laptopNumber");
    var laptopNumberInput = document.getElementById("laptopNumber").value;


    if(laptopNumberInput == ""){
        idForlaptopNumber.innerHTML = "Please enter Laptop Number";
        laptopNumberId.style.borderBottom = "red solid 1px";
    }

    else if (laptopNumberInput != ""){
        if(laptopNumberPattern.test(laptopNumberInput)) {
            idForlaptopNumber.classList.add("msg-alert");
            idForlaptopNumber.innerHTML = "";
            laptopNumberId.style.border = "lightgreen solid 2px";
            return true;
         }
        else {
            idForlaptopNumber.innerHTML = "Please enter valid number";
            idForlaptopNumber.classList.remove('msg-alert');
            idForlaptopNumber.classList.add("show-msg");
            laptopNumberId.style.borderBottom = "red solid 1px";
            idForSeatingNumber.style.color = "red";
            return false;
         }
     }

}


function projectTypeValidation () {
    var typeOfProjectPattern = /[A-Za-z]{8,20}/;
    var idForProjectType = document.getElementById("typeOfProjectAlert");
    var ProjectTypeId = document.getElementById("typeOfProject");
    var ProjectTypeInput = document.getElementById("typeOfProject").value;

    if(ProjectTypeId == ""){
        idForProjectType.innerHTML = "Please enter your project type";
        ProjectTypeId.style.border = "red solid 1px";
    }

    else if(ProjectTypeInput != ""){
        if(typeOfProjectPattern.test(ProjectTypeInput)) {
            idForProjectType.classList.add('msg-alert');
            idForProjectType.style.color = "lightgreen";
            idForProjectType.innerHTML = "";
            ProjectTypeId.style.border = "lightgreen solid 2px";
            return true;
        }
        else {
            idForProjectType.classList.remove('msg-alert');
            idForProjectType.classList.add("show-msg");
            ProjectTypeId.style.borderBottom = "red solid 1px";
            idForProjectType.style.color = "red";
            return false;
        }
    }
}

function toolsTypeValidation () {
    var toolsPattern = /[A-z0-9]{8,20}/;
    var idForTools = document.getElementById("typeOfProjectAlert");
    var toolsId = document.getElementById("typeOfProject");
    var toolsInput = document.getElementById("typeOfProject").value;


    if(toolsInput == ""){
        idForTools.innerHTML = "Please enter the tools";
        toolsId.style.border = "red solid 1px";
    }

    else if(toolsInput != "") {
        if(toolsPattern.test(toolsInput)) {
            idForTools.classList.add("msg-alert");
            toolsId.style.border = "lightgreen solid 2px";
            idForTools.innerHTML = "";
            return true;
        }
        else {
            idForTools.innerHTML = "Please enter valid characters"
            idForTools.classList.remove('msg-alert');
            idForTools.classList.add("show-msg");
            toolsId.style.borderBottom = "red solid 1px";
            idForTools.style.color = "red";
            return false;
        }
    }
}