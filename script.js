// Video player controls
const videoPlayer = document.getElementById('videoPlayer');

// Array of video URLs - update with actual paths or URLs
const videoSources = [
    'https://github.com/Sadiqul10/Assignment-/blob/main/02.MP4'
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Video/02.MP4', // Replace with your video URL or local server path
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Video/03.MP4',  // Replace with your video URL or local server path
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Video/04.mp4',
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Video/05.mp4'
];

let currentVideoIndex = 0; // Track the current video index

// Set the initial video source
videoPlayer.src = videoSources[currentVideoIndex];

// Button controls
const playPauseVideoBtn = document.getElementById('playPauseVideo');
const nextVideoBtn = document.getElementById('nextVideo');
const prevVideoBtn = document.getElementById('prevVideo');

// Next Video Button - advances to the next video in the array
nextVideoBtn.addEventListener('click', () => {
    currentVideoIndex++;
    if (currentVideoIndex >= videoSources.length) {
        currentVideoIndex = 0; // Loop back to the first video if at the end
    }
    videoPlayer.src = videoSources[currentVideoIndex]; // Update the video source
    videoPlayer.play(); // Play the new video
});

// Play/Pause Video Button - toggles play/pause
playPauseVideoBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
});

// Previous Video Button - moves to the previous video in the array
prevVideoBtn.addEventListener('click', () => {
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
        currentVideoIndex = videoSources.length - 1; // Loop to the last video if at the start
    }
    videoPlayer.src = videoSources[currentVideoIndex]; // Update the video source
    videoPlayer.play(); // Play the new video
});


// Audio player controls
const audioPlayer = document.getElementById('audioPlayer');
const audioSources = [
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Audio/01.mp3',
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Audio/02.mp3',
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Audio/03.mp3',
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Audio/04.mp3',
    'C:/Users/sadiq/OneDrive/Desktop/Video Player/Project for MCA/Audio/05.mp3'
];
let currentAudioIndex = 0;

const playPauseAudioBtn = document.getElementById('playPauseAudio');
const nextAudioBtn = document.getElementById('nextAudio');
const prevAudioBtn = document.getElementById('prevAudio');

// Play/Pause Audio Button
playPauseAudioBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

// Next Audio Button
nextAudioBtn.addEventListener('click', () => {
    currentAudioIndex++;
    if (currentAudioIndex >= audioSources.length) {
        currentAudioIndex = 0; // Loop back to first audio
    }
    audioPlayer.src = audioSources[currentAudioIndex];
    audioPlayer.play();
});

// Previous Audio Button
prevAudioBtn.addEventListener('click', () => {
    currentAudioIndex--;
    if (currentAudioIndex < 0) {
        currentAudioIndex = audioSources.length - 1; // Loop to last audio
    }
    audioPlayer.src = audioSources[currentAudioIndex];
    audioPlayer.play();
});

// Pause audio when the video is playing
videoPlayer.addEventListener('play', () => {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
});

// Pause video when the audio is playing
audioPlayer.addEventListener('play', () => {
    if (!videoPlayer.paused) {
        videoPlayer.pause();
    }
}); 

