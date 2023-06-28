const square = document.querySelector(".square");

const animation = square.animate(
    [
        {transform: "translateX(0)"},
        {transform: "translateY(0)"},
        {transform: "translateX(100vw)"},
        {transform: "translateX(0)"},
        {transform: "translateY(0)"},
    ],
    {
        duration: 10000,
        iterations: Infinity
    }
)

