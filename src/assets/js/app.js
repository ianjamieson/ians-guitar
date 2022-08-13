// audio player
class AudioPlayer {
    constructor(audio, player) {
        this.audio = audio;
        this.player = player;
        this.timer = null;
        this.playButton = this.player.querySelector('[data-control="play"]');
        this.stopButton = this.player.querySelector('[data-control="stop"]');
        this.progressBar = this.player.querySelector('[data-control="progress"]');
        this.completionPercentage = '0%';

        this.playButton.addEventListener('click', this.play.bind(this));
        this.stopButton.addEventListener('click', this.pause.bind(this));
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
        this.playButton.classList.add('hidden');
        this.stopButton.classList.remove('hidden');
        this.timer = setInterval(() => {
            this.completionPercentage = ((this.audio.currentTime / Math.round(this.audio.duration)) * 100) + '%';
            this.progressBar.style.width = this.completionPercentage;
        }, 30);
    }
    pause() {
        this.audio.pause()
        this.playButton.classList.remove('hidden');
        this.stopButton.classList.add('hidden');;
        clearInterval(this.timer);
    }
}

new AudioPlayer(document.querySelector('audio'), document.querySelector('#player'));
