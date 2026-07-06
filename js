// ===============================
// Portfolio JavaScript
// ===============================

// Dark Mode Toggle
const modeBtn = document.getElementById("mode");

if (modeBtn) {
    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        modeBtn.innerHTML = document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";
    });
}

// -------------------------------
// Typing Animation
// -------------------------------

const typingElement = document.getElementById("typing");

const text =
"Computer Science Student | Python | SQL | Future Software Developer";

let index = 0;

function typingEffect() {

    if (typingElement && index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 70);

    }

}

window.addEventListener("load", typingEffect);


// -------------------------------
// Scroll Reveal Animation
// -------------------------------

const reveals = document.querySelectorAll(".reveal");

function reveal() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// -------------------------------
// Skill Bar Animation
// -------------------------------

const skills = document.querySelectorAll(".progress");

function animateSkills() {

    skills.forEach(skill => {

        const width = skill.getAttribute("data-width");

        skill.style.width = width;

    });

}

window.addEventListener("load", animateSkills);


// -------------------------------
// Active Navigation
// -------------------------------

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// -------------------------------
// Smooth Scroll
// -------------------------------

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// -------------------------------
// Scroll To Top Button
// -------------------------------

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0066ff;
color:white;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 5px 20px rgba(0,0,0,.3);
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// -------------------------------
// Animated Counters
// -------------------------------

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerHTML="0";

    function update(){

        const target=+counter.getAttribute("data-target");

        const current=+counter.innerHTML;

        const increment=target/100;

        if(current<target){

            counter.innerHTML=Math.ceil(current+increment);

            setTimeout(update,20);

        }

        else{

            counter.innerHTML=target;

        }

    }

    update();

});


// -------------------------------
// Welcome Popup
// -------------------------------

window.addEventListener("load",()=>{

    setTimeout(()=>{

        console.log("Welcome to Manasa's Portfolio!");

    },1000);

});


// -------------------------------
// Fade Hero Button
// -------------------------------

const btn=document.querySelector(".btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

}


// -------------------------------
// Footer Year
// -------------------------------

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
