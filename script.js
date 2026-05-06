const music = document.getElementById('bgMusic');
const noBtn = document.getElementById('noBtn');

// Navigation Function
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');
}

// Page 1: Envelope & Music Trigger
document.getElementById('envelope').addEventListener('click', function() {
    this.style.opacity = "0";
    music.play().catch(() => console.log("Music play pending interaction"));
    setTimeout(() => {
        document.getElementById('teddyBox').style.display = 'block';
    }, 500);
});

// Page 2: Moving "No" Button Logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Page 4: Photo Upload Logic
// This part handles the photo upload and replaces the cat image when you pick a new file
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('imagePreview');
        // This clears the cat photo and puts your uploaded photo in
        output.innerHTML = `<img src="${reader.result}">`;
    };
    if(event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]);
    }
});
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('imagePreview');
        output.innerHTML = `<img src="${reader.result}">`;
    };
    reader.readAsDataURL(event.target.files[0]);
});

// Floating Hearts Background Effect
function createHearts() {
    const container = document.querySelector('.floating-hearts');
    if(!container) return;
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-10%';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random();
    heart.style.transition = '4s linear';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.style.bottom = '110%';
    }, 100);
    
    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHearts, 300);