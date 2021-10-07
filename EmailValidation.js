const emailRegex = RegExp("^[a-zA-Z]+[@]{1}[a-zA-Z]*[.]{1}[a-zA-Z]*$");  

function validateEmail(email)
{
    if(emailRegex.test(email))
        console.log(email + " is Valid");
    else
        throw email + " is Invalid";
}

try
{
    validateEmail("abcde@bridgelabz.co");
    validateEmail(".abc@abc.com");
}
catch(e)
{
    console.error(e);
}