document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showItem(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }

        carouselItems.forEach(item => {
            item.style.display = "none";
        });

        carouselItems[index].style.display = "block";
        currentIndex = index;
    }

    function nextSlide() {
        showItem(currentIndex + 1);
    }

    function prevSlide() {
        showItem(currentIndex - 1);
    }

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds
});

// Select elemen-elemen yang diperlukan
const nav = document.querySelector(".nav");
const show = document.getElementById("open");
const hide = document.getElementById("close");
const container = document.querySelector(".container");
const cards = document.querySelector(".card").offsetWidth;
let currentWidth = 0;

// Fungsi untuk menampilkan menu navigasi
const open = () => {
    nav.classList.add("active");
    show.style.display = "none";
};

// Fungsi untuk menyembunyikan menu navigasi
const close = () => {
    nav.classList.remove("active");
    show.style.display = "block";
};

// Menambahkan event listener untuk tombol buka dan tutup
show.addEventListener("click", open);
hide.addEventListener("click", close);

// Fungsi untuk menggeser slideshow ke slide berikutnya
const next = () => {
    Slide(currentWidth + 1);
};

// Fungsi untuk menggeser slideshow ke slide sebelumnya
const prev = () => {
    Slide(currentWidth - 1);
};

// Fungsi untuk menggeser slideshow sesuai dengan indeks slide yang diberikan
const Slide = (index) => {
    currentWidth = index;
    if (index >= 0 && index < 5) {
        let translateX = (-currentWidth * cards) - 60;
        container.style.transform = `translateX(${translateX}px)`;
    }
};

// Menambahkan event listener untuk tombol navigasi slideshow
document.querySelector(".swiper-button-next").addEventListener("click", next);
document.querySelector(".swiper-button-prev").addEventListener("click", prev);
