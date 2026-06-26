const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightboxImg");
const title = document.getElementById("title");

/* 📌 СКІЛЬКИ ФОТО В КОЖНІЙ КАТЕГОРІЇ */
const data = {
    gerdany: 27,
    zhguty: 10,
    pavutynky: 10,
    sotuary: 10,
    kolye: 10,
    serezhky: 10,
    braslety: 10,
    kotelyony: 10,
    selyanky: 10
};

/* 💰 РІЗНІ ЦІНИ ДЛЯ КОЖНОГО ФОТО */
const prices = {
    gerdany: [120,150,200,180,300,250,400,500,600,700,320,410,150,220,330,280,390,450,500,600,700,800,900,1000,1100,1200,1300],
    zhguty: [200,250,300,350,400,450,500,550,600,650],
    pavutynky: [180,200,220,240,260,280,300,320,340,360],
    sotuary: [300,320,340,360,380,400,420,440,460,480],
    kolye: [500,550,600,650,700,750,800,850,900,950],
    serezhky: [100,120,140,160,180,200,220,240,260,280],
    braslety: [150,170,190,210,230,250,270,290,310,330],
    kotelyony: [200,220,240,260,280,300,320,340,360,380],
    selyanky: [300,320,340,360,380,400,420,440,460,480]
};

let images = [];
let index = 0;

/* 🏷️ назва */
title.innerText = category;

/* 🖼️ генерація галереї */
for (let i = 1; i <= data[category]; i++) {

    let wrapper = document.createElement("div");
    wrapper.classList.add("item");

    let imgEl = document.createElement("img");

    /* 👉 якщо ти використовуєш папки:
       gerdany/1.jpg */
    imgEl.src = `${category}/${i}.jpg`;

    /* 💰 ціна */
    let priceEl = document.createElement("div");
    priceEl.classList.add("priceTag");
    priceEl.innerText = prices[category][i - 1] + " грн";

    imgEl.onclick = () => openLB(i - 1);

    wrapper.appendChild(imgEl);
    wrapper.appendChild(priceEl);

    gallery.appendChild(wrapper);

    images.push(`${category}/${i}.jpg`);
}

/* 🔍 LIGHTBOX */
function openLB(i){
    index = i;
    lightbox.style.display = "flex";
    img.src = images[index];
}

function closeLB(){
    lightbox.style.display = "none";
}

function next(){
    index = (index + 1) % images.length;
    img.src = images[index];
}

function prev(){
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
}

/* 📱 SWIPE */
let startX = 0;

lightbox.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
});

/* ⌨️ клавіатура */
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
});
