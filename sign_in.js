const signUpButton = document.getElementById('Sign-up');
const signInButton = document.getElementById('Sign-in');
const container = document.getElementById('container');


signUpButton.addEventListener('click',()=> 
container.classList.add('right-panel-active'));


signInButton.addEventListener('click',()=> 
container.classList.remove('right-panel-active'));

// filling in form 

const names = document.getElementById('name');
const mail= document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


form.addEventListener('submit',(e)=>{
    

    if(password.value.length<8 && password.value.length>1){
        alert('Oops!! Password must be longer than 8 characters');
    }
    
    if(names.value === ''|| password.value === '' || mail.value ===''){
        alert("Oops!! All fields are required");
    }
    
    if((names.value !== '') && (password.value !== '') && (mail.value !=='') && (password.value.length>8))
        swal("Congrats", "You succeed to login", "success");

    if(!isEmail(emailValue))
    {
        alert('invalid email id');
    }
    
   
})



function isEmail(mail){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}


// popup form

document.getElementById('login-popup-box').addEventListener('click',function(){

    document.querySelector(".login").style.display = "flex";

    // blur background on popup

    document.querySelector(".home-page").addEventListener('click',function toggle(){

        var blur = document.getElementById('blur');
        
        blur.classList.toggle('active');
        
    });
});

document.querySelector(".close-login-box").addEventListener('click',function(){
   
    document.querySelector(".login").style.display = "none";

    document.querySelector(".login").addEventListener('click',function toggle(){

         // removing blur background
        
    var removeBlur = document.getElementById('blur');
        
    removeBlur.classList.toggle('active');
        
    });

   
});
