let scrollTop = 0;
let bar = document.getElementsByClassName("bar")[0];

window.onload = function () {

}

window.addEventListener("scroll", function () {
    // 스크롤 값 얻기
    scrollTop = document.documentElement.scrollTop;

    // 스크롤바 퍼센트 구하기  Math.ceil -> 소수점 올림
    let per = Math.ceil(scrollTop / (document.body.scrollHeight - window.outerHeight) * 100);
    console.log(per)

    bar.style.width = per + "%";
}, false);