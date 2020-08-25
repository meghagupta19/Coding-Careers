const slidePics = [
    {
        img: "https://tse1.mm.bing.net/th?id=OIP._yp4UH6mk2AVSH4-gSWUHAHaLH&pid=Api&P=0&w=300&h=300",
    },
    {
        img:  "https://tse2.mm.bing.net/th?id=OIP.KUQigQf4sNF8hNQYKdf11wHaC2&pid=Api&P=0&w=414&h=160",
                  
    },
    {       
        img: "https://tse4.mm.bing.net/th?id=OIP.tD64X-hEf4Xq_vvU7vGL3AHaD_&pid=Api&P=0&w=349&h=189",
    
    },
    {
        img:  "https://tse2.mm.bing.net/th?id=OIP.GdX1FQj0_onbsruvzysHMAHaEB&pid=Api&P=0&w=277&h=151",
             
    },
    {

        img:  "https://tse4.mm.bing.net/th?id=OIP.U9THaRdIPtdWjpAPrql8lQHaEK&pid=Api&P=0&w=282&h=159",                 
    },
    {
        img:  "https://tse4.mm.bing.net/th?id=OIP.6pHL97WqeqGoy2XHkXLHYwHaEK&pid=Api&P=0&w=335&h=189", 
    },
    {
        img:  "https://tse4.mm.bing.net/th?id=OIP.EL_izz5EjDRLIkwG5QlMKQHaEk&pid=Api&P=0&w=251&h=156", 
    },
    
    {
        img:  "https://tse2.mm.bing.net/th?id=OIP.Q-aZJWfSbQxa8320VOCIbAHaDt&pid=Api&P=0&w=347&h=174", 
    },
    {
        img:  "https://tse1.mm.bing.net/th?id=OIP.AbjtiBJ7_DCEr8VPJ7KIcwHaEK&pid=Api&P=0&w=295&h=167", 
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


