const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z]+[.]?[a-zA-Z]+$");
function validateEmail(email)
{
    if(emailRegex.test(email))
        console.log(email + " is Valid");
    else
        console.log(email + " is Invalid");
}
try
{
validateEmail("abc@bridgelabz.co.in");
validateEmail( "abc@gmail.com.com");
validateEmail( "abc@yahoo.com");
validateEmail( "abc@1.com");
validateEmail( "abc-100@yahoo.com");
validateEmail( "abc.100@yahoo.com");
validateEmail( "abc111@abc.com");
validateEmail( "abc-100@abc.net");
validateEmail( "abc.100@abc.com.au");
validateEmail( "abc+100@gmail.com");

console.log("---------- Invalid Emails ----------");

validateEmail( ".abc@abc.com");
validateEmail( "abc");
validateEmail( "abc@.com.my");
validateEmail( "abc@abc@gmail.com");
validateEmail( "abc()*@gmail.com");
validateEmail( "abc..2002@gmail.com");
validateEmail( "abc.@gmail.com");
validateEmail( "abc123@.com");
validateEmail( "abc123@.com.com");
validateEmail( "abc123@gmail.a");
validateEmail( "abc@%*.com");
validateEmail( "abc@gmail.com.aa.au");
}
catch(e)
{
    console.error(e);
}