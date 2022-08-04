let h1;
let cursor_item;
let x = 0;
let y = 0;
let mouse_x = 0;
let mouse_y = 0;
let speed = 0.05;

// window.onload 화면이 다 로드 된 후에 실행
window.onload = function () {
    // h1 = document.getElementsByTagName("h1")[0];
    cursor_item = document.getElementsByClassName("cursor_item")[0];
    window.addEventListener('click', mouseFunc, false);

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
        cursor_item.style.transform = "translate(" + x + "px," + y + "px)";
    }
    // loop();
}

// 마우스 움직임을 부드럽게
// function loop() {
//     mouse_x += (x - mouse_x) * speed;
//     mouse_y += (y - mouse_y) * speed;
//     h1.innerText = `x: ${x} mx: ${mouse_x}`;
//     cursor_item.style.transform = "translate(" + mouse_x + "px," + mouse_y + "px)";
//     window.requestAnimationFrame(loop);
// }

/*
mouse_x += (x - mouse_x) * speed; 설명
움직일 값 += (현재 마우스 위치 - 바로 전 위치 값) * 속도
전 위치가 100, 마우스 현재위치가 150일 때 50을 이동해야 한다.
바로 50을 이동하면 부드럽지 않기 때문에 작은 수를 곱해서 천천히 도달하게 한다.
*/

