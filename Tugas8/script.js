document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".swiper-slide");
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

    setInterval(nextSlide, 3000);
});

// Select elemen-elemen yang diperlukan
const nav = document.querySelector(".nav");
const show = document.getElementById("open");
const hide = document.getElementById("close");
const container = document.querySelector(".container");
const cards = document.querySelector(".swiper-slide").offsetWidth; // Menggunakan .swiper-slide
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



//yang dicontoh 
let endpoint = 'https://crudcrud.com/api/3dc37b6823ce4c02a4bdd12b7ef4314e/products'

let konten = document.getElementById('konten')

let ambil = fetch(endpoint)
                .then((res) => res.json())
                .then((response)=> {
        
                    response.data.forEach(element => {
                        konten.innerHTML += `        
                                        <img src="${product.image}" alt="${product.name}">
                                        <center>
                                          <h3>${product.name}</h3>
                                          <p class="harga">${product.price}</p>
                                          <p>${product.description}</p>
                                        </center>`
                    });
                })
let dataUser = {
  "name" : "Java",
  "price" : "Rp 200.000",
  "description" : "Bahasa pemrograman yang pertama yakni Java. Sedikit informasi, bahasa pemrograman Java sudah digunakan di lebih dari 3 miliar perangkat di seluruh dunia. Pada umumnya Java dipakai untuk aplikasi di smartphone, aplikasi desktop, dan pengembangan situs."
};

let fetchOptions = {
  "method" : "POST", //jika ingin mengganti perintah tinggal ganti di ini saja
  "headers" : {
    "Content-Type" : "application/json"
  },
  body : JSON.stringify(dataUser)
};

fetch(endpoint, fetchOptions).then((res) => res.JSON()).then((response) => console.log(response))


// update data
//let fetchOptions = {
//   "method" : "PUT", //jika ingin mengganti perintah tinggal ganti di ini saja
//   "headers" : {
//     "Content-Type" : "application/json"
//   },
//   body : JSON.stringify(dataUser)
// };

// fetch(endpoint+'/1', fetchOptions).then((res) => res.JSON()).then((response) => console.log(response))

// let fetchOptions = {
//   "method" : "GET", //jika ingin mengganti perintah tinggal ganti di ini saja
//   "headers" : {
//     "Content-Type" : "application/json"
//   },
//   body : JSON.stringify(dataUser)
// };
