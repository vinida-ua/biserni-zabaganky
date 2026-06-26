const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightboxImg");
const title = document.getElementById("title");

const data = {
    gerdany: 30,
    zhguty: 40,
    pavutynky: 10,
    sotuary: 20,
    kolye: 5,
    serezhky: 5,
    braslety: 30,
    kotelyony: 10,
    selyanky: 15
};

let images = [];
let index = 0;

/* назва зверху */
title.innerText = category.toUpperCase();

/* створення галереї */
for (let i = 1; i <= data[category]; i++) {

    let imgEl = document.createElement("img");
    imgEl.src = `${category}/${i}.jpg`;

    imgEl.onclick = () => {
        openLB(i - 1);
    };

    gallery.appendChild(imgEl);

    images.push(`${category}/${i}.jpg`);
}

/* OPEN LIGHTBOX */
function openLB(i){
    index = i;
    lightbox.style.display = "flex";
    img.src = images[index];
}

/* CLOSE */
function closeLB(){
    lightbox.style.display = "none";
}

/* NEXT */
function next(){
    index = (index + 1) % images.length;
    img.src = images[index];
}

/* PREV */
function prev(){
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
}

/* SWIPE */
let startX = 0;

lightbox.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
});

/* ESC */
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
});
