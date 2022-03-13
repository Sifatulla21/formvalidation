// Function For Validation Form
function validateForm(){
    var user = document.getElementById('username').value; 
    var password = document.getElementById('password').value; 
    var contact = document.getElementById('contact').value; 

    //  Validate User Name
    if (user.trim() == "") { 
        alert("Username must be filled out"); 
        return false; 
    } 
    else if (!user.trim().match(/nsu/g)) { 
        alert("Username must be filled out with nsu"); 
        return false; 
    } 
     //  Validate Password
    else if (password.trim() == "") { 
        alert("Password must be filled out"); 
        return false; 
    } 
    else if (!password.trim().match(/^[0-9a-zA-Z]{7,20}$/)){ 
        alert("Password Must Contain Neumeric Value And Should 7 to 20 Character"); 
        return false; 
    } 
    else if (!password.trim().charAt(0).match(/^[A-Z]$/)){ 
        alert("First Character Must be UpperCase"); 
        return false; 
    } 
    var string = password.toString();
    var numeric = 0;
    var upper = 0;
    var lower = 0;
    var character = '';
    for(var i=0; i<string.length;i++){
        character = string.charAt(i);
        if(!isNaN(character)){
            numeric=numeric+1;
        }
        else if(character == character.toUpperCase()){
            upper=upper+1;
        }
        else if(character == character.toLowerCase()){
            lower=1;
        }
    }
    if(numeric<2 || lower==0){
        alert("Password Must Contain Two Neumeric One UpperCase And One LowerCase Value.");
        return false;
    }
    if(upper<0 || upper>3){
        alert("Not More Than 3 UpperCase.");
        return false;
    }
    //  Validate Contact
    else if (contact.trim()== "") { 
        alert("Contact must be filled out"); 
        return false; 
    } 
    else if (!contact.trim().match(/^[0-9]{11}$/)){ 
        alert("Contact Must Contain Number And Length Must 11"); 
        return false; 
    } 
    else if (!contact.startsWith("01")){ 
        alert("Contacts First Two Digit Must 01"); 
        return false; 
    } 
    else{
        return true;
    }
};