const crow1 = document.getElementsByClassName("crow1")[0];
const crow2 = document.getElementsByClassName("crow2")[0];

let x = 0;
let y = 0;
let mouse_x = 0;
let mouse_y = 0;
let speed = 0.1;

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

    crow1.style.transform = "translate(" + (mouse_x / 2) + "px, " + (mouse_y / 2) + "px)";
    crow2.style.transform = "translate(" + -(mouse_x / 2) + "px, " + -(mouse_y / 2) + "px)";

    window.requestAnimationFrame(loop);
}

// transform = "rotate(" + 변하는 값 + "deg)"