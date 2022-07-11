function scroller(){ 
    const projects = document.getElementById("projects");
    var windowHeight = window.innerHeight;
    var elementTop = projects.getBoundingClientRect().top;
    var elementVisible = 500;
    if (elementTop < windowHeight - elementVisible) {
        console.log("we here");
        document.getElementById("pg1").style.backgroundColor = "transparent";
        document.getElementById("pg2").style.backgroundColor = "#FAF8EB";
    } else {
        document.getElementById("pg1").style.backgroundColor = "#FAF8EB";
        document.getElementById("pg2").style.backgroundColor = "transparent";
    }
};
window.addEventListener("scroll", scroller);