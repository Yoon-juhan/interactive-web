// window.onload 화면이 다 로드 된 후에 실행
window.onload = function () {
    let h1 = document.getElementsByTagName("h1")[0];
    let cursor_item = document.getElementsByClassName("cursor_item")[0];
    window.addEventListener('mousemove', mouseFunc, false);

    function mouseFunc(e) {
        h1.innerText = `x: ${e.clientX} y: ${e.clientY}`;
        cursor_item.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
    }
}
