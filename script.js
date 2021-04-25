const menuBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".close-button");
const sidenav = document.querySelector(".side-nav");


menuBtn.addEventListener("click", function(e){
    sidenav.classList.toggle("reveal");
    e.preventDefault();
});

closeBtn.addEventListener("click", function(e){
    sidenav.classList.toggle("reveal");
    e.preventDefault();
});

sidenav.addEventListener("click", function(e){
    if(e.target.tagName === 'A'){
        sidenav.classList.remove("reveal");
    };
});

window.addEventListener("resize", function(e){
    if(window.innerWidth > 900){
        sidenav.classList.remove("reveal");
    }
    e.preventDefault();
});
