window.onload = function resetStates() {
    document.getElementById("pg1").classList.add("active-pg");
}

function scroller(){ 
    const projects = document.getElementById("projects");
    var windowHeight = window.innerHeight;
    var elementTop = projects.getBoundingClientRect().top;
    var elementVisible = 500;
    if (elementTop < windowHeight - elementVisible) {
        console.log("we here");
        document.getElementById("pg1").style.backgroundColor = "transparent";
        document.getElementById("pg2").classList.add("active-pg");
    } else {
        document.getElementById("pg1").style.backgroundColor = "#FAF8EB";
        document.getElementById("pg2").classList.remove("active-pg");
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