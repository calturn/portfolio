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
        modeBtn.innerHTML = "Lights off";
        document.getElementById("squiggle").style.backgroundImage = "url(../img/sssquiggly_light.svg)";
        document.getElementById("topBtn").style.color = "var(--accent-one)";
        root.style.setProperty('--bg', lightColours[0]);
        root.style.setProperty('--accent-one', lightColours[1]);
        root.style.setProperty('--accent-two', lightColours[1]);
        root.style.setProperty('--accent-three', lightColours[1]);
    } else {
        // Dark mode
        modeBtn.classList.add("mode-switch-dark");
        modeBtn.innerHTML = "Lights on";
        document.getElementById("squiggle").style.backgroundImage = "url(../img/sssquiggly.svg)";
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
    var elementVisible = 500;
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