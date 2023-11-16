class AudioPlayer {
    constructor(src) {
      this.audio = new Audio();
      this.audio.src = src;
      this.audio.preload = 'auto';
      this.audio.controls = false;
    }
  
    play() {
      this.audio.play();
    }
  
    pause() {
      this.audio.pause();
    }
  
    setVolume(volume) {
      this.audio.volume = volume;
    }
    
    loop(){
        this.audio.loop = true;
    }
  }
  