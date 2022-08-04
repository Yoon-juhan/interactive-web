const imgArr = document.getElementsByTagName("img");
const bird = document.getElementsByClassName("vod")[0];


let x = 0;
let y = 0;
let mouse_x = 0;
let mouse_y = 0;
let speed = 0.01;

window.onload = function () {
    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e) {
        // 화면의 중앙을 0, 0 으로 지정
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
    }
    loop();
}

function loop() {
    mouse_x += (x - mouse_x) * speed;
    mouse_y += (y - mouse_y) * speed;

    imgArr[0].style.transform = "translate(" + (mouse_x / 9) + "px, " + (mouse_y / 9) + "px)";
    imgArr[1].style.transform = "translate(" + (mouse_x / 5) + "px, " + (mouse_y / 5) + "px)";
    imgArr[2].style.transform = "translate(" + (mouse_x / 3) + "px, " + (mouse_y / 3) + "px)";
    imgArr[3].style.transform = "translate(" + (mouse_x / 1) + "px, " + (mouse_y / 1) + "px)";

    bird.style.transform = "translate(" + (mouse_x / 5) + "px, " + (mouse_y / 5) + "px)";

    window.requestAnimationFrame(loop);
}

// transform = "rotate(" + 변하는 값 + "deg)"