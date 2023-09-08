// for the movement animation
const glass = document.querySelector(".glass");
const info = document.querySelector(".info");
const python = document.querySelector(".python");
const java = document.querySelector(".java");
const c   = document.querySelector(".c");

//moving animation
glass.addEventListener("mousemove", (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) /30 ;
let yAxis = (window.innerWidth / 2 - e.pageY) /30;
console.log(xAxis);
glass.style.transform = `rotateX(${xAxis}deg)  rotateY(${yAxis}deg)`;

});
// animate in
glass.addEventListener('mouseenter',(e) => {
    glass.style.transition = "none";
   
});

//animate out
glass.addEventListener('mouseleave',(e) => {
    glass.style.transition = "all 0.5s ease";
    glass.style.transform = `rotateX(0deg)  rotateY(0deg)`;
    
});

// animate cards 
python.addEventListener('mouseenter',(e) => {
    python.style.transform = "translateZ(10000000px)";
    python.style.transition = "none"
});
python.addEventListener('mouseleave',(e) => {
    python.style.transform = "translateZ(0px)";
    python.style.transition = "all 0.5s ease";
});

java.addEventListener('mouseenter',(e) => {
    java.style.transform = "translateZ(10000000px)";
    java.style.transition = "none"
});
java.addEventListener('mouseleave',(e) => {
    java.style.transform = "translateZ(0px)";
    java.style.transition = "all 0.5s ease";
});

c.addEventListener('mouseenter',(e) => {
    c.style.transform = "translateZ(10000000px)";
    c.style.transition = "none"
});
c.addEventListener('mouseleave',(e) => {
    c.style.transform = "translateZ(0px)";
    c.style.transition = "all 0.5s ease";
});