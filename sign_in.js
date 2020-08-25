const signUpButton = document.getElementById('Sign-up');
const signInButton = document.getElementById('Sign-in');
const container = document.getElementById('container');

signUpButton.addEventListener('click',()=> 
container.classList.add('right-panel-active'));

signInButton.addEventListener('click',()=> 
container.classList.remove('right-panel-active'));

// filling in form 

const name = document.getElementById('name');
const email= document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


form.addEventListener('submit',(e)=>{

    if(name.value === ''|| password.value === '' || email.value ===''){
        sweetAlert("Oops...", "All fields are required", "error");
    }
    if(password.value.length<8 && password.value.length>1 ){
        sweetAlert("Oops...", "Password must be longer than 8 characters", "error");
    }
    if((name.value !== '') && (password.value !== '') && (email.value !=='') && (password.value.length>8))
        swal("Congrats", "You succeed to login", "success");
   
})

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