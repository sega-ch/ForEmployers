const ball = document.querySelector(".ball");

ball.addEventListener("click", function(e) {

    const animation = ball.animate(
        [
            // translate(первый параметр по X, второй параметр по Y)
            {transform: "translate(0px, 0px)"}, 
            {transform: "translate(15px, -200px)"},
            {transform: "translate(15px,0px)"}, 
            {transform: "translate(30px,-70px)"},
            {transform: "translate(30px,0px)"},
            {transform: "translate(60px,-50px)"},
            {transform: "translate(60px,0px)"},
            {transform: "translate(60px,0px)"},
            {transform: "translate(60px,0px)"},
            {transform: "translate(60px,0px)"},
            {transform: "translate(60px,0px)"},
            {transform: "translate(60px,0px)"},
        ],
        {
            duration: 5000,
        }
    );

})