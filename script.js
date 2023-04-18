function orderValidate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    var regName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/; 
    var regEmail = /^([a-z\d\.-]*)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var regPass = /^[\d\w@-]{6,20}$/i;

    if(!regName.test(name)){
        alert("Enter a valid name!");
        document.getElementById("name").style.border = "2px solid #FF7276";
        return false;
    }
    if(!regEmail.test(email)){
        alert("Enter a valid email!");
        document.getElementById("email").style.border = "2px solid #FF7276";
        return false;
    }
    if(!regPass.test(pass)){
        alert("Enter a valid password!");
        document.getElementById("pass").style.border = "2px solid #FF7276";
        return false;
    }
    if(!cpass.match(pass)){
        alert("Recheck your password!");
        document.getElementById("cpass").style.border = "2px solid #FF7276";
        return false;
    }
    else{
        alert("Project Order Submitted")
        return true;
    }
}

function contactValidate(){
    var name = document.getElementById("cntname").value;
    var email = document.getElementById("cntemail").value;

    var regName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/; 
    var regEmail = /^([a-z\d\.-]*)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if(!regName.test(name)){
        alert("Enter a valid name!");
        document.getElementById("cntname").style.border = "2px solid #FF7276";
        return false;
    }
    if(!regEmail.test(email)){
        alert("Enter a valid email!");
        document.getElementById("cntemail").style.border = "2px solid #FF7276";
        return false;
    }
    else{
        alert("Thank you for contacting us!")
        return true;
    }
}