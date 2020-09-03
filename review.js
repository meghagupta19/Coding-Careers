const reviews = [
    {
        id: 1,
        
        name: "Shancho Subrethann",
        
        job:  "Web-developer",
        
        img:  "https://images.pexels.com/photos/53487/james-stewart-man-person-actor-53487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
        text: "I had an amazing experience with this company.It provided me a lot of opportunities.\n\
        I started from basics and continued with many projects which improved my skills.Hereby \n\
        I also state that this company has a big role in making my career as we all need an\n\
        inspiration to do something.I am overwhelmed as I got chance to collaborate with this \n\
        company and explore much more!"

    },
    {
        id: 2,
        
        name: "Rancho Mahajan",
        
        job: "Software Engineer",
        
        img: "https://images.pexels.com/photos/76961/audrey-hepburn-actress-breakfast-at-tiffany-s-prominent-76961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
        text: "I had an amazing experience with this company.\n\
        I started from basics and continued with many projects which improved my skills.\n\
        we allways need some opportunities and a platform to expell out our inner skills.We need an\n\
        inspiration to do something.Doing something big or start from basics, all require to explore \n\
        much more!"

    },
    {
        id: 3,
        
        name: "Pontevar Scheenjanm",
        
        job:  "App Developer",
        
        img:  "https://images.pexels.com/photos/3823493/pexels-photo-3823493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "I am glad for joining this company.It provided me a lot of opportunities.\n\
               Doing projects and going through various exercises made me able to compete with \n\
               many competitors in market. Its instilled in me passion for creating my own identity."
    },
    {
        id: 4,
        
        name: "Jack Hangothon",
        
        job:  "Web Developer",
        
        img:  "https://images.pexels.com/photos/4865526/pexels-photo-4865526.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        
        text: "You don't own experiences rather you have to build some.This company\n\
               provided me a lot of opportunities.I started my career from just basics and now here\n\
               I am!!.Learning doesn't need age but focus and some willingness to create."   
    }

];

const image = document.getElementById("person-1");
const author = document.getElementById("author");
const profession = document.getElementById("job");
const information = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    
    showReviews();
   
});

function showReviews(){
    
    const item = reviews[currentItem];
    image.src = item.img;
    author.textContent = item.name;
    profession.textContent = item.job;
    information.textContent = item.text;
    
}

nextBtn.addEventListener("click",function(){
    
    currentItem++;
    
    if(currentItem>reviews.length-1){
        currentItem = 0;
    }
    showReviews(currentItem);
    
});

prevBtn.addEventListener("click",function(){
    
    currentItem--;
    
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showReviews(currentItem);
    
});


