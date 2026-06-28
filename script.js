const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightboxImg");
const title = document.getElementById("title");

/* 🏷️ Переклад заголовків для гарного вигляду */
const categoryTitles = {
    gerdany: "Гердани",
    zhguty: "Жгути",
    pavutynky: "Павутинки",
    sotuary: "Сотуари",
    kolye: "Кольє",
    serezhky: "Сережки",
    braslety: "Браслети",
    kotelyony: "Котильйони",
    selyanky: "Селянки"
};
title.innerText = categoryTitles[category] || category;

/* 📦 БАЗА ДАНИХ: ФОТО + ЦІНА (Тепер вони пов'язані назавжди) 
   Ви можете називати файли з нулем (01) чи без (1) — як вам зручніше в папці! */
const database = {
    gerdany: [
        { file: "01.jpg", price: 2300 },
        { file: "02.jpg", price: 2300 },
        { file: "03.jpg", price: 2300 },
        { file: "04.jpg", price: 2500 },
        { file: "05.jpg", price: 3500 },
        { file: "06.jpg", price: 2000 },
        { file: "07.jpg", price: 2300 },
        { file: "08.jpg", price: 2000 },
        { file: "09.jpg", price: 2200 },
        { file: "10.jpg", price: 1700 },
        { file: "11.jpg", price: 2500 },
        { file: "12.jpg", price: 1600 },
        { file: "13.jpg", price: 1800 },
        { file: "14.jpg", price: 1200 },
        { file: "15.jpg", price: 2100 },
        { file: "16.jpg", price: 1800 },
        { file: "17.jpg", price: 1700 },
        { file: "18.jpg", price: 2200 },
        { file: "19.jpg", price: 2500 },
        { file: "20.jpg", price: 2200 },
        { file: "21.jpg", price: 2300 },
        { file: "22.jpg", price: 2300 },
        { file: "23.jpg", price: 2200 },
        { file: "24.jpg", price: 2300 },
        { file: "25.jpg", price: 3000 },
        { file: "26.jpg", price: 1900 },
        { file: "27.jpg", price: 1900 },
        { file: "28.jpg", price: 2100 },
        { file: "29.jpg", price: 2100 },
        { file: "30.jpg", price: 2500 },
        { file: "31.jpg", price: 700 },
        { file: "32.jpg", price: 1500 },
        { file: "33.jpg", price: 1100 }
    ],
    zhguty: [
        { file: "01.jpg", price: 1500 }, { file: "02.jpg", price: 1300 }, { file: "03.jpg", price: 1600 },
        { file: "04.jpg", price: 1500 }, { file: "05.jpg", price: 1250 }, { file: "06.jpg", price: 1500 },
        { file: "07.jpg", price: 1500 }, { file: "08.jpg", price: 1400 }, { file: "09.jpg", price: 1500 },
        { file: "10.jpg", price: 1400 }, { file: "11.jpg", price: 1400 }, { file: "12.jpg", price: 1400 },
        { file: "13.jpg", price: 1200 }, { file: "14.jpg", price: 1400 }, { file: "15.jpg", price: 1250 },
        { file: "16.jpg", price: 1250 }, { file: "17.jpg", price: 1250 }, { file: "18.jpg", price: 1300 },
        { file: "19.jpg", price: 1400 }, { file: "20.jpg", price: 1400 }, { file: "21.jpg", price: 1250 },
        { file: "22.jpg", price: 1250 }, { file: "23.jpg", price: 1250 }, { file: "24.jpg", price: 1500 },
        { file: "25.jpg", price: 1500 }, { file: "26.jpg", price: 1500 }, { file: "27.jpg", price: 1400 },
        { file: "28.jpg", price: 1400 }, { file: "29.jpg", price: 1400 }, { file: "30.jpg", price: 1250 },
        { file: "31.jpg", price: 1400 }, { file: "32.jpg", price: 800 },  { file: "33.jpg", price: 800 },
        { file: "34.jpg", price: 800 },  { file: "35.jpg", price: 900 }
    ],
    pavutynky: [
        { file: "01.jpg", price: 800 }, { file: "02.jpg", price: 800 }, 
        { file: "03.jpg", price: 800 }, { file: "04.jpg", price: 800 }
    ],
    sotuary: [
        { file: "01.jpg", price: 1600 }, { file: "02.jpg", price: 1500 }, { file: "03.jpg", price: 1500 },
        { file: "04.jpg", price: 1500 }, { file: "05.jpg", price: 1500 }, { file: "06.jpg", price: 1500 },
        { file: "07.jpg", price: 1500 }, { file: "08.jpg", price: 1500 }, { file: "09.jpg", price: 1500 },
        { file: "10.jpg", price: 1500 }
    ],
    kolye: [],
    serezhky: [
        { file: "01.jpg", price: 350 }, { file: "02.jpg", price: 400 }, { file: "03.jpg", price: 350 },
        { file: "04.jpg", price: 400 }, { file: "05.jpg", price: 350 }, { file: "06.jpg", price: 400 }
    ],
    braslety: [
        { file: "01.jpg", price: 450 }, { file: "02.jpg", price: 350 }, { file: "03.jpg", price: 120 },
        { file: "04.jpg", price: 120 }, { file: "05.jpg", price: 200 }, { file: "06.jpg", price: 400 },
        { file: "07.jpg", price: 450 }, { file: "08.jpg", price: 200 }, { file: "09.jpg", price: 400 },
        { file: "10.jpg", price: 450 }, { file: "11.jpg", price: 450 }, { file: "12.jpg", price: 200 },
        { file: "13.jpg", price: 200 }, { file: "14.jpg", price: 200 }, { file: "15.jpg", price: 200 },
        { file: "16.jpg", price: 300 }, { file: "17.jpg", price: 300 }, { file: "18.jpg", price: 400 },
        { file: "19.jpg", price: 300 }, { file: "20.jpg", price: 400 }, { file: "21.jpg", price: 350 },
        { file: "22.jpg", price: 300 }, { file: "23.jpg", price: 300 }, { file: "24.jpg", price: 300 },
        { file: "25.jpg", price: 400 }, { file: "26.jpg", price: 200 }
    ],
    kotelyony: [],
    selyanky: [
        { file: "01.jpg", price: 4500 }, { file: "02.jpg", price: 1200 }, { file: "03.jpg", price: 2600 },
        { file: "04.jpg", price: 1500 }, { file: "05.jpg", price: 2500 }, { file: "06.jpg", price: 1400 },
        { file: "07.jpg", price: 4500 }, { file: "08.jpg", price: 900 }
    ]
};

let currentCategoryItems = database[category] || [];
let images = [];
let index = 0;

/* 🖼️ Генерація галереї */
currentCategoryItems.forEach((item, i) => {
    let wrapper = document.createElement("div");
    wrapper.classList.add("item");

    let imgEl = document.createElement("img");
    imgEl.src = `${category}/${item.file}`;

    /* 💰 Ціна */
    let priceEl = document.createElement("div");
    priceEl.classList.add("priceTag");
    priceEl.innerText = item.price + " грн";

    imgEl.onclick = () => openLB(i);

    wrapper.appendChild(imgEl);
    wrapper.appendChild(priceEl);
    gallery.appendChild(wrapper);

    images.push(`${category}/${item.file}`);
});

/* 🔍 LIGHTBOX */
function openLB(i){
    if (images.length === 0) return;
    index = i;
    lightbox.style.display = "flex";
    img.src = images[index];
}

function closeLB(){
    lightbox.style.display = "none";
}

function next(){
    if (images.length === 0) return;
    index = (index + 1) % images.length;
    img.src = images[index];
}

function prev(){
    if (images.length === 0) return;
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

/* ⌨️ КЛАВІАТУРА */
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
});
