 const targetDate = new Date("October 15, 2025 00:00:00").getTime();

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            document.querySelector('.countdown-container').innerHTML =
                "<h2 style='color: #fff; font-family: Deltha;'>The event has started!</h2>";
            clearInterval(timerInterval);
            return;
        }

        const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

        daysEl.innerText = days;
        hoursEl.innerText = hours;
        minutesEl.innerText = minutes;
        secondsEl.innerText = seconds;
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();


document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".about-wrapper > .about-container");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  containers.forEach(c => observer.observe(c));
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');

  });
   window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";});