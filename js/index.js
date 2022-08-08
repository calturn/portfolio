const projects = [
    {
        "title" : "Kiwistay",
        "type" : "Web App",
        "description" : 
        `This was an individual project in which the conceptual client was Tourism New Zealand.<br><br>
        The client required a web app that allowed users to search for accommodation options across New Zealand based on specific search criteria.<br><br>
        Tourism NZ's "100% Pure New Zealand" campaign brand guidelines informed the app's visual design.`,
        "tools" : ["HTML5", "CSS", "JavaScript", "SASS", "Google Maps API", "Figma"],
        "link" : "https://github.com/calturn/KiwiStay",
        "img" : "../img/Kiwistay_modal.jpg"
    },
    {
        "title" : "preloved",
        "type" : "Web App",
        "description" : 
        `Working in a team of four, we were tasked with creating a new web-based, niche market, customer-to-customer (C2C) trading platform.<br><br>
        My specific role in this project was spread evenly across the UX Research, UI Design, and development across the full stack.`,
        "tools" : ["HTML5", "CSS", "JavaScript", "SASS", "Node.js", "MongoDB", "Mongoose", "Gulp", "Figma"],
        "link" : "https://github.com/calturn/preloved",
        "img" : "../img/preloved_modal.png"
    },
    {
        "title" : "MEANWHILE Gallery",
        "type" : "WordPress Theme",
        "description" : 
        `This was an individual project in which I was tasked with researching, designing and developing a conceptual custom WordPress theme for Wellington's MEANWHILE Gallery.<br><br>
        Development of this custom theme included the creation of custom post types, metaboxes, taxonomies, and appearance panel functions using PHP.`,
        "tools" : ["HTML5", "CSS", "JavaScript", "PHP", "WordPress", "Figma"],
        "link" : "https://callum.turner.yoobeestudent.net/meanwhile/",
        "img" : "../img/meanwhile_modal.jpg"
    }
];

// Reset page indicators
window.onload = function resetStates() {
    document.getElementById("pg1").classList.add("active-pg");
}

// Color values
// "bg", "light-color", "interactive-color (btn inactive)", "highlight-color (btn active)"
const darkColors = ["#000425", "#AFB7FF", "#FFC690", "#FAF8EB"];
const lightColours = ["#FAF8EB", "#7B88FF", "#FF3E32", "#000425"];

// Light and dark mode button
let modeBtn = document.getElementById('modeSwitch');
var root = document.querySelector(':root');
const eyeconClosed = `
    <svg width="100%" height="120%" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2C2 2 17.3553 16.5 32 16.5C46.6447 16.5 62 2 62 2" stroke="currentColor" stroke-width="3"/>
    <line x1="31.5" y1="16" x2="31.5" y2="24" stroke="currentColor" stroke-width="3"/>
    <line x1="47.9458" y1="11.3242" x2="52.5164" y2="17.89" stroke="currentColor" stroke-width="3"/>
    <line y1="-1.5" x2="8" y2="-1.5" transform="matrix(-0.571318 0.820729 0.820729 0.571318 17.5706 12)" stroke="currentColor" stroke-width="3"/>
    </svg>
`;
const eyeconOpen = `
    <svg width="100%" height="100%" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 17C2 17 17.3553 2 32 2C46.6447 2 62 17 62 17" stroke="currentColor" stroke-width="3"/>
    <circle cx="31.4643" cy="18.6071" r="8.57143" fill="currentColor"/>
    <circle cx="34" cy="15.6786" r="3" fill="currentColor"/>
    </svg>
`;
function switchMode() {
    if (modeBtn.classList.contains("mode-switch-dark")) {
        // Light mode
        modeBtn.classList.remove("mode-switch-dark");
        modeBtn.innerHTML = `<div class="eyecon eyecon-open">${eyeconOpen}</div> Lights off`;
        document.getElementById("squiggle").style.backgroundImage = "url(../img/sssquiggly_light.svg)";
        document.getElementById("starBtmLight").style.display = "flex";
        document.getElementById("starBtmDark").style.display = "none";
        root.style.setProperty('--bg', lightColours[0]);
        root.style.setProperty('--accent-one', lightColours[1]);
        root.style.setProperty('--accent-two', lightColours[2]);
        root.style.setProperty('--accent-three', lightColours[3]);
        // document.querySelector(".star-r").style.color = 'var(--accent-one)';
        // document.querySelector(".star-l").style.color = 'var(--accent-one)';
    } else {
        // Dark mode
        modeBtn.classList.add("mode-switch-dark");
        modeBtn.innerHTML = `<div class="eyecon">${eyeconClosed}</div> Lights on`;
        document.getElementById("squiggle").style.backgroundImage = "url(../img/sssquiggly.svg)";
        document.getElementById("starBtmLight").style.display = "none";
        document.getElementById("starBtmDark").style.display = "flex";
        root.style.setProperty('--bg', darkColors[0]);
        root.style.setProperty('--accent-one', darkColors[1]);
        root.style.setProperty('--accent-two', darkColors[2]);
        root.style.setProperty('--accent-three', darkColors[3]);
        // document.querySelector(".star-r").style.color = 'var(--accent-one)';
        // document.querySelector(".star-l").style.color = 'var(--accent-one)';
    }
}
modeBtn.addEventListener("click", switchMode);

// Page indicators scroll function
function scroller(){ 
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    var windowHeight = window.innerHeight;
    var elementTop = projects.getBoundingClientRect().top;
    var elementTopContact = contact.getBoundingClientRect().top;
    var elementVisible = 400;
    if ((elementTop < windowHeight - elementVisible) && (elementTopContact > windowHeight - elementVisible)) {
        // on pg 2
        document.getElementById("pg1").classList.remove("active-pg");
        document.getElementById("pg2").classList.add("active-pg");
        document.getElementById("pg3").classList.remove("active-pg");
    } else if (elementTopContact < windowHeight - elementVisible) {
        // on pg 3
        document.getElementById("pg1").classList.remove("active-pg");
        document.getElementById("pg2").classList.remove("active-pg");
        document.getElementById("pg3").classList.add("active-pg");
    } else {
        // on pg 1
        document.getElementById("pg1").classList.add("active-pg");
        document.getElementById("pg2").classList.remove("active-pg");
        document.getElementById("pg3").classList.remove("active-pg");
    }
};
window.addEventListener("scroll", scroller);

// Menu hide and show
const pageBody = document.getElementById("page");
// const menuBtn = document.getElementById("menuBtn");
// const menu = document.getElementById("menu");
// const blurFX = document.getElementById("blur");

// menuBtn.addEventListener("click", (event) => {
//     if (menuBtn.classList.contains("hamburger-close")) {
//         menuBtn.classList.remove("hamburger-close");
//         menu.style.opacity = "0";
//         menu.style.visibility = "hidden";
//         menu.style.overflowY = "hidden";
//         pageBody.style.overflowY = "auto";
//         menuBtn.style.transform = "translateX(0rem);"
//     } else {
//         menuBtn.classList.add("hamburger-close");
//         menu.style.opacity = "1";
//         menu.style.visibility = "visible";
//         menu.style.overflowY = "scroll";
//         pageBody.style.overflowY = "hidden";
//     }
// });

// Kiwistay hide & show

document.getElementById("kiwistay").addEventListener("mouseover", (event) => {
    document.getElementById("kiwistayImg").classList.add("show");
    document.getElementById("idleImg").classList.add("hide");
});

document.getElementById("kiwistay").addEventListener("mouseout", (event) => {
    document.getElementById("kiwistayImg").classList.remove("show");
    document.getElementById("idleImg").classList.remove("hide");
});

// meanwhile hide & show

document.getElementById("meanwhile").addEventListener("mouseover", (event) => {
    document.getElementById("meanwhileImg").classList.add("show");
    document.getElementById("idleImg").classList.add("hide");
});

document.getElementById("meanwhile").addEventListener("mouseout", (event) => {
    document.getElementById("meanwhileImg").classList.remove("show");
    document.getElementById("idleImg").classList.remove("hide");
});

// preloved hide & show

document.getElementById("preloved").addEventListener("mouseover", (event) => {
    document.getElementById("prelovedImg").classList.add("show");
    document.getElementById("idleImg").classList.add("hide");
});

document.getElementById("preloved").addEventListener("mouseout", (event) => {
    document.getElementById("prelovedImg").classList.remove("show");
    document.getElementById("idleImg").classList.remove("hide");
});


// Projects modal
const modalBtn = document.getElementById("openModal");
const modal = document.getElementById("projectsModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function openModal(modalContent) {
    modal.style.display = "flex";
    pageBody.style.overflowY = "hidden";
    modalBody.innerHTML = modalContent;
} 
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
    pageBody.style.overflowY = "scroll";
});

const preloved = document.getElementById("prelovedBtn");
const meanwhile = document.getElementById("meanwhileBtn");
const kiwiStay = document.getElementById("kiwistayBtn");

function fillModalContent(projects, name) {
    
    for (let i = 0; i < projects.length; i++) {
        let selectedProject;
        if (name === "kiwistay") {
            selectedProject = projects[0];
        } else if (name === "preloved") {
            selectedProject = projects[1];
        } else if (name === "meanwhile") {
            selectedProject = projects[2];
        } else {
            return false;
        }
        let title = selectedProject.title;
        let subtitle = selectedProject.type;
        let description = selectedProject.description;
        let tools = selectedProject.tools;
        let link = selectedProject.link;
        let img = selectedProject.img;
        let modalContent = 
        `
            <div class="projects-modal-l">
            <h1 class="modal-title">${title}</h1>
            <h2 class="modal-subtitle">${subtitle}</h2>
            <p class="modal-description">${description}</p>
            <p class="modal-tools-p">🛠 Tools used:</p>
            <ul id="tools" class="modal-tools"></ul>
            <a target="_blank" href="${link}" class="modal-link">View on Github <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div class="projects-modal-r">
                <img class="projects-modal-img" src="${img}"></img>
            </div>
        `
        openModal(modalContent);

        // Fill in tools used
        let modalTools = document.getElementById("tools");
        for (let i = 0; i < tools.length; i++){
            if (i != (tools.length - 1)){
                // insert comma if not the last array value
                modalTools.innerHTML += `<li class="modal-tools-li">${tools[i]},</li>`;
            } else {
                modalTools.innerHTML += `<li class="modal-tools-li">${tools[i]}</li>`;
            }
        }
    }
}

kiwiStay.addEventListener("click", function(){
    fillModalContent(projects, "kiwistay");
});
preloved.addEventListener("click", function(){
    fillModalContent(projects, "preloved");
});
meanwhile.addEventListener("click", function(){
    fillModalContent(projects, "meanwhile");
});