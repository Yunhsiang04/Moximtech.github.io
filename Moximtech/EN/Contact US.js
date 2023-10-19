var companyname = document.getElementById("companyname");
var username = document.getElementById("username");
var emailText = document.getElementById("emailText");
var subject = document.getElementById("subject");
var body = document.getElementById("body");
var btn = document.getElementById("btn");
var to = "vickychan@moximtech.com";

btn.addEventListener("click", function(){
    var message = body.value +'%0A%0A';
        message += "Company:"+ companyname.value + '%0A';
        message += "Form:" + username.value + '%0A';
        message += "Email:" + emailText.value;

    mail = "mailto:" + to + "?subject=" + subject.value + "&body=" + message;
    mail.click();
})


