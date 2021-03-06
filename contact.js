const forms=document.getElementById('form-btn');
const name=document.getElementById('username');
const email=document.getElementById('e-mail');
const contact=document.getElementById('phone-no');


forms.addEventListener("click",(e)=>{

    e.preventDefault();
    checkInput();

});

function checkInput(){
    
    //get user details

    const nameValue=name.value.trim();
    const emailValue=email.value.trim();
    const contactValue=contact.value.trim();
   
      



    if(nameValue===''){
        //show error
        // add error class
        setError(name,'username is required');
    }

    else{
        //success
        setSuccess(name);
    }

    if(emailValue==='')
    {
        setError(email,'email required');
    }

    else if(!isEmail(emailValue))
    {
        setError(email,'invalid email-id');
    }

    else{
        setSuccess(email);
    }
  
    if(contactValue===''){
        
        setError(contact,'contact is required');
    }
    else{
        
        setSuccess(contact);
    }
   





}

function setError(input,message){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // error message displayed inside small

    small.innerText=message;

    // error class

    formControl.className = 'form-control error';

}

function setSuccess(input){
    
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmail(email){

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

