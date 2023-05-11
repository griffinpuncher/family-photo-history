document.addEventListener("DOMContentLoaded",function() {
    
    //Post Hover Effect Test
    const hoverPost = document.querySelectorAll(".post");

    console.log("hi");
    console.log(hoverPost);

    hoverPost.forEach(element => {
        element.addEventListener("mouseenter", hoverEffect); 
        element.addEventListener("mouseleave", hoverEffect);       
    });

    function hoverEffect () {
        //increase size
        this.classList.toggle("hover");
        //show preview of Description
        console.log(this);
    }

    //Database Image Load Test
});