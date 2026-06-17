const selectElement = document.getElementById('Participation');
const imageElement = document.getElementById('participationImage');
const tnamediv = document.getElementById('tnamediv');
const popup = document.getElementById('infoPopup');
const infobtn = document.getElementById('info-btn');
const closepopup = document.getElementById('closePopup');
const subtn=document.getElementById('submitBtn');
closepopup.addEventListener('click', () => {
    popup.style.display = 'none';
})
infobtn.addEventListener('click', () => {
    popup.style.display = 'block';
})
selectElement.addEventListener('change', function () {
    const selectedValue = this.value;
    if (selectedValue === 'Event') {
        imageElement.src = '/threeqr.jpg';
        imageElement.style.display = 'block';
        tnamediv.style.display = 'block';
        subtn.style.display = 'block';
    } 
    else if (selectedValue === 'Workshop' || selectedValue === 'Both Event and Workshop') {
        imageElement.style.display = 'block';
        tnamediv.style.display = 'none';
        subtn.style.display = 'none';
        window.location.href = 'close.html';
    }
});


const video = document.getElementById('backgroundVideo');
const videoOverlay = document.getElementById('videoOverlay');


document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    let teamnameinput = document.getElementById('Teamname')
    let splevent = document.getElementById('splevent');
    let Teamname = document.getElementById('Teamname').value;
    const Member1 = document.getElementById('Member1').value;
    const Phone = document.getElementById('Phone').value;
    const Participation = document.getElementById('Participation').value;
    const accomadation = document.getElementById('accomadation').value;
    const email = document.getElementById('email').value;
    const upi = document.getElementById('upi').value;
    const college = document.getElementById('college').value;
    let specialevent = document.getElementById('splevent').value;
    let verified = "Not verified"

    if (Participation === 'Event') {
        tnamediv.style.display = 'block';
        teamnameinput.setAttribute('required', 'true');
        splevent.setAttribute('required', 'true')
    } else {
        window.location.href = 'close.html';
        
    }
    const response = await fetch('http://localhost:3000/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Member1, Phone, email, college, Participation, specialevent, accomadation, Teamname, upi, verified })
    });

    if (response.ok) {
        alert('Data saved!');
        document.getElementById('dataForm').reset();
        video.classList.add('active');
        video.play();

        video.addEventListener('ended', () => {
            videoOverlay.classList.add('active');
        });

    } else {
        alert('Error saving data');
    }
});