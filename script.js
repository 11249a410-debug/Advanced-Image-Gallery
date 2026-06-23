// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }
});

// Search

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {
    let value = search.value.toLowerCase();

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
});

// Category Filter

const buttons = document.querySelectorAll(".filter-buttons button");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        buttons.forEach(b =>
            b.classList.remove("active"));

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {

            if(filter === "all" ||
               card.classList.contains(filter))
            {
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }
        });
    });
});

// Favorites

document.querySelectorAll(".favorite")
.forEach(icon => {

icon.addEventListener("click", () => {
icon.classList.toggle("active");
});
});

// Lightbox

const images =
document.querySelectorAll(".card img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});
});

document.querySelector(".close")
.addEventListener("click", () => {
lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e)=>{
if(e.target===lightbox){
lightbox.style.display="none";
}
});
