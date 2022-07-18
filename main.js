function formValidation() {
 
    var fullname = document.registration.fullname;
    var mobile = document.registration.mobile;
    var email = document.registration.email;
    

    if (allLetter(fullname)) {

        if (phonenumber(mobile)) {
            if (validateEmail(email)) {

                document.getElementById("valid-feedback").innerHTML = "All fields valid";
                document.getElementById("invalid-feedback").innerHTML ="";
            }  

        }  
    }  
 
    return true;
    
}
    //code for validating user name
    function allLetter(uname) {
        var letters = /^[A-Za-z]+$/;
        if (uname.value.match(letters)) {
            return true;
        }
        else {
            uname.focus();
            document.getElementById("invalid-feedback").innerHTML = 'Username must have alphabet characters only';
            document.getElementById("valid-feedback").innerHTML ="";
            return false;
        }
    }

    //code for validating user address
    function alphanumeric(uadd) {
        var letters = /^[0-9a-zA-Z]+$/;
        if (uadd.value.match(letters)) {
            return true;
        }
        else {
            alert('User address must have alphanumeric characters only');
            uadd.focus();
            return false;
        }
    }

    //code for validating phone number
    function phonenumber(inputtxt) {
        var phoneno = /^\d{10}$/;
        if ((inputtxt.value.match(phoneno))) {
            return true;
        }
        else {
            document.getElementById("invalid-feedback").innerHTML = "Mobile number invalid(10 digits) ";
            document.getElementById("valid-feedback").innerHTML ="";
            return false;
        }
    }


    //code for validating email format
    function validateEmail(uemail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (uemail.value.match(mailformat)) {
            return true;
        }
        else { 
            document.getElementById("invalid-feedback").innerHTML = " You have entered an invalid email address!";
            document.getElementById("valid-feedback").innerHTML ="";
            uemail.focus();
            return false;
        }
    }

    //code for validating gender
    function validsex(umsex, ufsex) {
        x = 0;

        if (umsex.checked) {
            x++;
        } if (ufsex.checked) {
            x++;
        }
        if (x == 0) {
            alert('Select Male/Female');
            umsex.focus();
            return false;
        }
        else {
            alert('Form Successfully Submitted');
            window.location.reload()
            return true;
        }
    }
 

    
