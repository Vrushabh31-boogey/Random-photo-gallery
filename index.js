let loadmorebtn = document.getElementById("load-more-btn");
let imagecontainer = document.getElementById("image-container");

function loadImages() {
for (let i = 0; i < 5; i++) {
    let img = document.createElement("img");
    img.src = `https://picsum.photos/seed/${Math.random()}/400/300`;
    
    imagecontainer.appendChild(img);
}
}

loadmorebtn.addEventListener("click", function() {
    loadImages();
})