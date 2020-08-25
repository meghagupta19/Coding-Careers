const slidePics = [
    {
        img: "slide/download (6).jpg",
    },
    {
        img:  "slide/images (4).jpg",
                  
    },
    {       
        img: "slide/images (2).jpg",
    
    },
    {
        img:  "slide/images (14).jpg",
             
    },
    {

        img:  "slide/images (16).jpg",                 
    },
    {
        img:  "slide/images (17).jpg", 
    },
    {
        img:  "slide/images (25).jpg", 
    },
    
    {
        img:  "slide/images (33).jpg", 
    },
    {
        img:  "slide/maxresdefault.jpg", 
    }

];

const image = document.getElementById("person-1");

const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");

let currentSlide = 0;

window.addEventListener("DOMContentLoaded",function(){
    showSlides();
   
});

function showSlides(){
    const item = slidePics[currentSlide];
    image.src = item.img;
    
}

nextBtn.addEventListener("click",function(){
    currentSlide++;
    if(currentSlide>slidePics.length-1){
        currentSlide = 0;
    }
    showSlides(currentSlide);
});

prevBtn.addEventListener("click",function(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slidePics.length-1;
    }
    showSlides(currentSlide);
});


