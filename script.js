let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Set the max value of the progress bar based on the song duration
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains("fa-circle-pause")) {
        song.pause(); 
        ctrlIcon.classList.remove("fa-circle-pause");
        ctrlIcon.classList.add("fa-circle-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-circle-play");
        ctrlIcon.classList.add("fa-circle-pause");

        // Update the progress bar as the song plays
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    }
}

// Update the song's currentTime when the progress bar changes
progress.oninput = function() {
    song.currentTime = progress.value;

    // Only play the song if it's not already playing
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-circle-play");
        ctrlIcon.classList.add("fa-circle-pause");
    }
};
