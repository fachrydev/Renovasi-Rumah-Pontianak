/* ==========================
   FAQ ACCORDION
========================== */

document
.querySelectorAll(".faq-question")
.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

const item =
btn.parentElement;

item.classList.toggle(
"active"
);

});

});

/* ==========================
   REVEAL ON SCROLL
========================== */

const reveals =
document.querySelectorAll(
".section,.stat-card,.service-card,.why-card,.portfolio-card,.testimonial-card,.contact-card"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.15
}

);

reveals.forEach(el=>{

el.classList.add(
"hidden"
);

revealObserver.observe(el);

});
/* ==========================
   NAVBAR SCROLL
========================== */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

navbar.classList.add(
"scrolled"
);

}else{

navbar.classList.remove(
"scrolled"
);

}

});
/* ==========================
   LOADER
========================== */

window.addEventListener(
"load",
()=>{

setTimeout(()=>{

document
.querySelector(".loader")
.classList.add(
"hide"
);

},1200);

});
/* ==========================
   CURSOR GLOW
========================== */

const glow =
document.querySelector(
".cursor-glow"
);

window.addEventListener(
"mousemove",
e=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

});
const particles =
document.getElementById(
"particles"
);

for(let i=0;i<40;i++){

const particle =
document.createElement(
"span"
);

particle.classList.add(
"particle"
);

const size =
Math.random()*8+2;

particle.style.width =
size+"px";

particle.style.height =
size+"px";

particle.style.left =
Math.random()*100+"%";

particle.style.animationDuration =
(Math.random()*15+10)+"s";

particle.style.animationDelay =
Math.random()*5+"s";

particles.appendChild(
particle
);

}
const hero =
document.querySelector(
".hero"
);

window.addEventListener(
"scroll",
()=>{

const scroll =
window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.5 + "px";

});
const testimonial =
document.querySelector(
".testimonial-grid"
);

let scrollPos = 0;

setInterval(()=>{

scrollPos += 320;

testimonial.scrollTo({

left:scrollPos,

behavior:"smooth"

});

if(
scrollPos >
testimonial.scrollWidth
){

scrollPos = 0;

}

},4000);
window.addEventListener(
"scroll",
()=>{

const winScroll =
document.documentElement
.scrollTop;

const height =
document.documentElement
.scrollHeight -
document.documentElement
.clientHeight;

const scrolled =
(winScroll / height) * 100;

document.getElementById(
"progress-bar"
).style.width =
scrolled + "%";

});