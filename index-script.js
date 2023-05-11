document.addEventListener("DOMContentLoaded",function() {
    
    //Post Hover Effect Test
    const hoverPost = document.querySelectorAll(".post");
    const overlay = document.querySelector(".overlay");
    
    hoverPost.forEach(element => darkHover(element));

    function darkHover(element) {
        element.addEventListener("mouseenter", () => overlay.classList.toggle("hover")); 
        element.addEventListener("mouseleave", () => overlay.classList.toggle("hover")); 
    }

    //Database Image Load Test
});