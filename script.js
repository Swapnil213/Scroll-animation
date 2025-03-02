let cards = document.querySelectorAll(".card");
let stack = document.querySelector(".stackArea");

function rotate() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
            // console.log("Away")
        }
        else {
            card.style.transform = `rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
        }
    });
}
rotate();

window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.5;
    let topval = stack.getBoundingClientRect().top;
    let index = -1 * (topval / distance + 1);
    index = Math.floor(index);
    for (i = 0; i < cards.length; i++){
        if (i <= index) {
            cards[i].classList.add("away");
        } else {
            cards[i].classList.remove("away");
        }
    }
    rotate();
});