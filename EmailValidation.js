const emailRegex = RegExp("^(abc)[a-zA-Z][.@a-zA-Z]*$"); 

function validateEmail(email)
{
    if(emailRegex.test(email))
        console.log(email + " is Valid");
    else
        throw email + " is Invalid";
}
try
{
    validateEmail("abca.abc@gmail.com");
    validateEmail(".abc@abc.com");
}
catch(e)
{
    console.error(e);
}