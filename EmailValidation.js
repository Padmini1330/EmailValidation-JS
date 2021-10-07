const emailRegex = RegExp("^[a-zA-Z]+[@]{1}[a-zA-Z][.a-zA-Z]*$");  

function validateEmail(email)
{
    if(emailRegex.test(email))
        console.log(email + " is Valid");
    else
        throw email + " is Invalid";
}

try
{
    validateEmail("abc@abc.bridgelabz.com");
    validateEmail(".abc@abc.com");
}
catch(e)
{
    console.error(e);
}