/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const uList= document.getElementById('navbar__list');
const fragment=document.createDocumentFragment();
const intersectionOptions={
    rootMargin:'0px',
    threshold:0.65
};






/**
 * End Global Variables
 
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    /**
     * Builds a dynamic navigation menu by creating a list item with a link to every section on the page
     */
    for(let i=0;i<sections.length;i++){
        const newLi=document.createElement('li');
        newLi.innerHTML=`<a href='#${sections[i].id}' class='menu__link'>Section ${i+1}</a>`;
        fragment.appendChild(newLi);
    }
    uList.appendChild(fragment);
};


// Scroll to anchor ID using scrollIntoView
function smoothScroll(event){
    /**
     * replaces the standard scrolling behaviour of links with smooth scrolling
     */
    let sectn='';
    for(let i=0;i<sections.length;i++){
        if ("#"+sections[i].id===event.target.hash){
            sectn=sections[i];
            break;
        };
    };
    event.preventDefault();
    sectn.scrollIntoView({behavior:'smooth'});
    
};
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded',buildNav());
// Scroll to section on link click
uList.addEventListener('click',smoothScroll);
// Set sections as active
const observer= new IntersectionObserver(activeSection,intersectionOptions);
for(i=0;i<sections.length;i++){
    observer.observe(sections[i]);
};
function activeSection(sections){
    /**
     * Assigns an active class to the section that is currently visible in the windows using Intersection Observer API
     */
    for (let i=0;i<sections.length;i++){
       if(!(sections[i].isIntersecting)&&sections[i].target.classList.contains('your-active-class')){
           sections[i].target.classList.remove('your-active-class');
       }else if(sections[i].isIntersecting&&!sections[i].target.classList.contains('your-active-class')){
        sections[i].target.classList.add('your-active-class');
        };
    };
};