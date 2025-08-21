//First project: create a picture slider for the background of the website

const images = [
    "images/slideshow 1.png", "images/slideshow 2.jpg", "images/slideshow 3.jpg", "images/slideshow 4.png"
];

let index = 0;
const background = document.getElementById("slider-background");

background.style.backgroundImage = `url("${images[index]}")`; //initial img

setInterval(()=>{
    index = (index + 1) % images.length;
    background.style.backgroundImage = `url("${images[index]}")`; //Need quotations around the url!
}, 3000); //changes every 3 seconds

//Second project: click the tab to be sent a new section of the website

const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section-tabs");

tabs.forEach(tabs,index => { //unfinished
    tabs.addEventListener('click', ()=>{
        
    });
});

//Third project: have the program buttons send you to the program

const button = document.querySelectorAll(".button");
