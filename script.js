// Falling Hearts Animation
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart-background");
        heart.style.setProperty("--x", Math.random() * 100 + "vw");
        heart.style.setProperty("--duration", Math.random() * 3 + 2 + "s");
        body.appendChild(heart);
    }
});

// Background Music
const music = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicButton.textContent = "Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "Play Music";
    }
});

