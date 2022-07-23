// audio player
class AudioPlayer {
    constructor(audio, player) {
        this.audio = audio;
        this.player = player;
        this.timer = null;
        this.playButton = this.player.querySelector('[data-control="play"]');
        this.progressBar = this.player.querySelector('[data-control="progress"]');
        this.completionPercentage = '0%';

        this.playButton.addEventListener('click', this.playPause.bind(this));
        this.audio.addEventListener('ended', this.pause.bind(this));

    }
    playPause() {
        if (this.audio.paused) {
            this.play();
        } else {
            this.pause();
        }
    }
    play() {
        this.audio.play();
        this.playButton.innerHTML = '⬛';
        this.timer = setInterval(() => {
            this.completionPercentage = ((this.audio.currentTime / Math.round(this.audio.duration)) * 100) + '%';
            this.progressBar.style.width = this.completionPercentage;
        }, 30);
    }
    pause() {
        this.audio.pause();
        this.playButton.innerHTML = '&#9658;';
        clearInterval(this.timer);
    }
}

new AudioPlayer(document.querySelector('audio'), document.querySelector('#player'));
