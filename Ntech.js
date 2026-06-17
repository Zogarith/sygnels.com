// Slick Carousel Init
$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
    arrows: true,
    speed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

// Astronaut Animation
let x = -200;
let y = window.innerHeight - 250;
let directionX = 1;
let directionY = -1;

const astronaut = document.getElementById("astronaut");
const video = document.getElementById("bgVideo");

setInterval(() => {
                                                            
  // Zoom and pan video
  const zoom = 1 + 0.1;
  video.style.transform = `translate(-50%, -50%) scale(${zoom})`;
}, 60);
