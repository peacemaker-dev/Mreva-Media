// =============================
// GALLERY SCRIPT (HTML handles thumbnails)
// =============================

let currentIndex = 0;
let currentGallery = [];
let currentGalleryName = "";

// Define ALL images for each gallery
const galleryData = {
  photoshoot: [
    "images/photoshoot/photoshoot1.jpg",
    "images/photoshoot/photoshoot2.jpg",
    "images/photoshoot/photoshoot3.jpg",
    "images/photoshoot/photoshoot4.jpg",
    "images/photoshoot/photoshoot5.jpg",
    "images/photoshoot/photoshoot6.jpg",
    "images/photoshoot/photoshoot7.jpg",
    "images/photoshoot/photoshoot8.jpg",
    "images/photoshoot/photoshoot9.jpg",
    "images/photoshoot/photoshoot10.jpg",
    "images/photoshoot/photoshoot11.jpg",
    "images/photoshoot/photoshoot12.jpg",
    "images/photoshoot/photoshoot13.jpg",
    "images/photoshoot/photoshoot14.jpg",
    "images/photoshoot/photoshoot15.jpg",
    "images/photoshoot/photoshoot16.jpg",
    "images/photoshoot/photoshoot17.jpg",
    "images/photoshoot/photoshoot18.jpg",
    "images/photoshoot/photoshoot19.jpg",
    "images/photoshoot/photoshoot20.jpg",
    "images/photoshoot/photoshoot21.jpg",
    "images/photoshoot/photoshoot22.jpg",
    "images/photoshoot/photoshoot23.jpg",
    "images/photoshoot/photoshoot24.jpg",
    "images/photoshoot/photoshoot25.jpg",
    "images/photoshoot/photoshoot26.jpg",
    "images/photoshoot/photoshoot27.jpg",
    "images/photoshoot/photoshoot28.jpg"
  ],
  graduation: [
    "images/graduation/grad1.jpg",
    "images/graduation/grad2.jpg",
    "images/graduation/grad3.jpg",
    "images/graduation/grad4.jpg",
    "images/graduation/grad5.jpg",
    "images/graduation/grad6.jpg",
    "images/graduation/grad7.jpg",
    "images/graduation/grad8.jpg",
    "images/graduation/grad9.jpg",
    "images/graduation/grad10.jpg",
    "images/graduation/grad11.jpg",
    "images/graduation/grad12.jpg",
    "images/graduation/grad13.jpg",
    "images/graduation/grad14.jpg",
    "images/graduation/grad15.jpg",
    "images/graduation/grad16.jpg",
    "images/graduation/grad17.jpg"
  ],
  tradditional: [
    "images/tradditional/tradditional1.jpg",
    "images/tradditional/tradditional2.jpg",
    "images/tradditional/tradditional3.jpg",
    "images/tradditional/tradditional4.jpg",
    "images/tradditional/tradditional5.jpg",
    "images/tradditional/tradditional6.jpg",
    "images/tradditional/tradditional7.jpg",
    "images/tradditional/tradditional8.jpg",
    "images/tradditional/tradditional9.jpg",
    "images/tradditional/tradditional10.jpg",
    "images/tradditional/tradditional11.jpg",
    "images/tradditional/tradditional12.jpg",
    "images/tradditional/tradditional13.jpg",
    "images/tradditional/tradditional14.jpg",
    "images/tradditional/tradditional15.jpg",
    "images/tradditional/tradditional16.jpg",
    "images/tradditional/tradditional17.jpg",
    "images/tradditional/tradditional18.jpg"
  ],
  wedding: [
    "images/wedding/wedding1.jpg",
    "images/wedding/wedding2.jpg",
    "images/wedding/wedding3.jpg",
    "images/wedding/wedding4.jpg",
    "images/wedding/wedding5.jpg",
    "images/wedding/wedding6.jpg",
    "images/wedding/wedding7.jpg",
    "images/wedding/wedding8.jpg",
    "images/wedding/wedding9.jpg",
    "images/wedding/wedding10.jpg",
    "images/wedding/wedding11.jpg",
    "images/wedding/wedding12.jpg",
    "images/wedding/wedding13.jpg",
    "images/wedding/wedding14.jpg"
  ],
  ceremony: [
    "images/ceremony/ceremony1.jpg",
    "images/ceremony/ceremony2.jpg",
    "images/ceremony/ceremony3.jpg",
    "images/ceremony/ceremony4.jpg",
    "images/ceremony/ceremony5.jpg",
    "images/ceremony/ceremony6.jpg",
    "images/ceremony/ceremony7.jpg",
    "images/ceremony/ceremony8.jpg",
    "images/ceremony/ceremony9.jpg",
    "images/ceremony/ceremony10.jpg",
    "images/ceremony/ceremony11.jpg",
    "images/ceremony/ceremony12.jpg"
  ],
  drone: [
    "images/drone/drone1.jpg",
    "images/drone/drone2.jpg",
    "images/drone/drone3.jpg",
    "images/drone/drone4.jpg",
    "images/drone/drone5.jpg",
    "images/drone/drone6.jpg"
  ]
};

// Open modal
function openModal(section, index) {
  currentGalleryName = section;
  currentGallery = galleryData[section] || [];
  currentIndex = index;

  if (currentGallery.length) {
    document.getElementById("modalImage").src = currentGallery[index];
    document.getElementById("imageModal").style.display = "flex";
  }
}

// Close modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Change slides (swipe or arrow navigation)
function changeSlide(step) {
  if (!currentGallery.length) return;
  currentIndex = (currentIndex + step + currentGallery.length) % currentGallery.length;
  document.getElementById("modalImage").src = currentGallery[currentIndex];
}

// =============================
// EVENT LISTENERS
// =============================
document.addEventListener("DOMContentLoaded", function () {
  // Attach click listeners to existing thumbnails in HTML
  document.querySelectorAll("[data-gallery]").forEach(img => {
    img.addEventListener("click", function () {
      const galleryName = this.getAttribute("data-gallery");
      const index = parseInt(this.getAttribute("data-index"));
      openModal(galleryName, index);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") changeSlide(1);
    if (e.key === "ArrowLeft") changeSlide(-1);
  });

  // Swipe navigation
  const modal = document.getElementById("imageModal");
  let touchStartX = 0;

  modal.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  modal.addEventListener("touchend", e => {
    const touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) changeSlide(-1); // Swipe right
    if (swipeDistance < -swipeThreshold) changeSlide(1);  // Swipe left
  });
});
