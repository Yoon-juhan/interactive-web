const image = document.getElementsByTagName("img");
const buttonIN = document.getElementById("buttonIn");
const buttonOut = document.getElementById("buttonOut");
const page = document.getElementsByClassName("page");
const text = document.getElementsByTagName("h1")[0];

const imageArr = Array.from(image);


function imageIn() {

    imageArr.forEach(i =>
        i.classList.add("in")
    );
    imageArr.forEach(i =>
        i.classList.remove("out")
    );

    text.innerText = "In";
}
function imageOut() {

    imageArr.forEach(i =>
        i.classList.add("out")
    );
    imageArr.forEach(i =>
        i.classList.remove("in")
    );
    text.innerText = "Out";
}




buttonIn.addEventListener("click", imageIn);
buttonOut.addEventListener("click", imageOut);