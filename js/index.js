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
        "img" : "../img/Kiwistay_Portrait.jpg"
    },
    {
        "title" : "preloved",
        "type" : "Web App",
        "description" : 
        `Working in a team of four, we were tasked with creating a new web-based, niche market, customer-to-customer (C2C) trading platform.<br><br>
        My specific role in this project was spread evenly across the UX Research, UI Design, and development across the full stack.`,
        "tools" : ["HTML5", "CSS", "JavaScript", "SASS", "Node.js", "MongoDB", "Mongoose", "Gulp", "Figma"],
        "link" : "https://github.com/calturn/preloved",
        "img" : "../img/preloved_portrait.png"
    },
    {
        "title" : "MEANWHILE Gallery",
        "type" : "WordPress Theme",
        "description" : 
        `This was an individual project in which I was tasked with researching, designing and developing a conceptual custom WordPress theme for Wellington's MEANWHILE Gallery.<br><br>
        Development of this custom theme included the creation of custom post types, metaboxes, taxonomies, and appearance panel functions using PHP.`,
        "tools" : ["HTML5", "CSS", "JavaScript", "PHP", "WordPress", "Figma"],
        "link" : "https://callum.turner.yoobeestudent.net/meanwhile/",
        "img" : "../img/meanwhile.png"
    }
];

// Reset page indicators
window.onload = function resetStates() {
    document.getElementById("pg1").classList.add("active-pg");
}

// Color values
const darkColors = ["#000425", "#AFB7FF", "#FFC690", "#FAF8EB"];
const lightColours = ["#FAF8EB", "#000425", "#7B88FF", "#FAF8EB"];

// Light and dark mode button
const modeBtn = document.getElementById("modeSwitch");
var root = document.querySelector(':root');
function switchMode() {
    if (modeBtn.classList.contains("mode-switch-dark")) {
        // Light mode
        modeBtn.classList.remove("mode-switch-dark");
        modeBtn.innerHTML = '<div class="eyecon eyecon-open"></div> Lights off';
        document.getElementById("squiggle").style.backgroundImage = "url(../img/sssquiggly_light.svg)";
        document.getElementById("topBtn").style.color = "var(--accent-one)";
        document.getElementById("starBtmLight").style.display = "flex";
        document.getElementById("starBtmDark").style.display = "none";
        root.style.setProperty('--bg', lightColours[0]);
        root.style.setProperty('--accent-one', lightColours[1]);
        root.style.setProperty('--accent-two', lightColours[1]);
        root.style.setProperty('--accent-three', lightColours[1]);
    } else {
        // Dark mode
        modeBtn.classList.add("mode-switch-dark");
        modeBtn.innerHTML = '<div class="eyecon"></div> Lights on';
        document.getElementById("squiggle").style.backgroundImage = "url(../img/sssquiggly.svg)";
        document.getElementById("topBtn").style.color = "var(--accent-two)";
        document.getElementById("starBtmLight").style.display = "none";
        document.getElementById("starBtmDark").style.display = "flex";
        root.style.setProperty('--bg', darkColors[0]);
        root.style.setProperty('--accent-one', darkColors[1]);
        root.style.setProperty('--accent-two', darkColors[2]);
        root.style.setProperty('--accent-three', darkColors[3]);
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
        console.log("we here");
        document.getElementById("pg1").style.backgroundColor = "transparent";
        document.getElementById("pg2").classList.add("active-pg");
        document.getElementById("pg3").classList.remove("active-pg");
    } else if (elementTopContact < windowHeight - elementVisible) {
        document.getElementById("pg1").classList.remove("active-pg");
        document.getElementById("pg2").classList.remove("active-pg");
        document.getElementById("pg3").classList.add("active-pg");
    } else {
        document.getElementById("pg1").style.backgroundColor = "#FAF8EB";
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

const preloved = document.getElementById("preloved");
const meanwhile = document.getElementById("meanwhile");
const kiwiStay = document.getElementById("kiwistay");

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
            <p class="modal-tools-p">Tools used:</p>
            <ul id="tools" class="modal-tools"></ul>
            <a target="_blank" href="${link}" class="modal-link">View on Github</a>
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