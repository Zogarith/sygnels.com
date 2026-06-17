
  window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  });

window.onpageshow = function(event) {
  if (event.persisted) {
    // Page was restored from back/forward cache
    location.reload(); // or re-run your initialization
  }
};
document.addEventListener('DOMContentLoaded', () => {
    const universe = document.querySelector('.universe');
    const planets = document.querySelectorAll('.planet');
    const mainTitle = document.querySelector('.main-title');

    const titles = {
        events: 'Events',
        special: 'Special Events',
        workshop: 'Workshop'
    };

    // Function to update the title
    function updateTitle(newState) {
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            mainTitle.textContent = titles[newState];
            mainTitle.style.opacity = '1';
            mainTitle.style.transform = 'translateY(0)';
        }, 500); // Should be less than animation speed
    }
    
    // Set the initial title on page load
    const initial_state = universe.className.split(' ')[1].replace('state-', '');
    mainTitle.textContent = titles[initial_state];
    // A small delay to allow the initial fade-in animation
    setTimeout(() => {
        mainTitle.style.opacity = '1';
        mainTitle.style.transform = 'translateY(0)';
    }, 100);


    planets.forEach(planet => {
        planet.addEventListener('click', (e) => {
            e.preventDefault();

            const clickedPlanetId = planet.dataset.planet;
            const currentState = universe.className.split(' ')[1].replace('state-', '');

            if (clickedPlanetId !== currentState) {
                universe.className = `universe state-${clickedPlanetId}`;
                updateTitle(clickedPlanetId);
            } else {
                const destination = planet.href;
                universe.style.transition = 'opacity 0.5s ease';
                universe.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = destination;
                }, 500);
            }
        });
    });
});
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');

  });
// Show main content after clicking acknowledge
document.getElementById("ackBtn").addEventListener("click", () => {
document.getElementById("tarsOverlay").style.display = "none";
document.getElementById("pageContent").classList.remove("blurred");

});

    