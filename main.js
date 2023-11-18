onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playButton');
  
    playButton.addEventListener('click', function () {
      playMusic();
    });
  
    function playMusic() {
      backgroundMusic.play().catch(error => {
        // Autoplay was prevented, show a play button or message for user interaction
        console.log("Autoplay prevented. Please interact with the page to play the audio.");
      });
    }
  });