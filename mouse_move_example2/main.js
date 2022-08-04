let btn_yes = document.querySelector("#yes");
let btn_no = document.querySelector("#no");
let cursorItem = document.querySelector(".cursorItem");
let circle = document.querySelector(".circle");

let x = 0, y = 0;
let mx = 0, my = 0;
let speed = 0.09;

window.onload = function () {

    // yes button
    btn_yes.addEventListener("mouseover", function (e) {
        circle.style.transform = "scale(0.3)";
    })
    btn_yes.addEventListener("mouseout", function (e) {
        circle.style.transform = "scale(1)";
    })

    // no button
    btn_no.addEventListener("mouseover", function (e) {
        circle.style.transform = "scale(0.3)";
    })
    btn_no.addEventListener("mouseout", function (e) {
        circle.style.transform = "scale(1)";
    })

    window.addEventListener("mousemove", function (e) {
        x = e.clientX;
        y = e.clientY;
        cursorItem.style.transform = "translate(" + x + "px, " + y + "px)";
    })

    loop()

}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    cursorItem.style.transform = "translate(" + mx + "px, " + my + "px)";
    requestAnimationFrame(loop);
}