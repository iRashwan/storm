import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  messagess = '';
  value = 50;
  Play = true;
  Stop = false;
  duration: number;
  currentTime: number;
  song = new Audio();
  stopInterval: any;
  soundMute = false;
  VolumeVlaue = 30;
  Heart = false;
  currentT: string;
  fullDuration: string;
  songLink: any;
  repeatSong = false;
  shuffle = false;
  songObject: any;

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit() {
    if (this.sharedService.subsVar === undefined) {
      this.sharedService.subsVar = this.sharedService.
      invokeSongObjectFunction.subscribe((name: string) => {
        this.getSongObject();
      });
    }
    this.sharedService.sharedMessage.subscribe(message => this.messagess = message);
    // console.log(JSON.parse(this.messagess));
    // this.songObject = JSON.parse(this.messagess);
    // this.song.src = '../../../assets/audio/123.mp3';
    // this.song.src = 'https://res.cloudinary.com/zoak-store/video/upload/v1580997726/The_Chainsmokers_-_Closer_ft._Halsey_fw4dib.mp3';

    this.songLink = this.song.src;
  }

  getSongObject() {
    this.songObject = JSON.parse(this.messagess);
    console.log(this.songObject);
    this.song.src = this.songObject.SongURL;
    this.song.onloadedmetadata = x => {
      this.duration = this.song.duration;
      console.log(this.duration, '  ', 'sss');
      this.time();
    };
  }

  time() {
    let curmins = Math.floor(this.song.currentTime / 60);
    let cursecs = Math.floor(this.song.currentTime - curmins * 60);
    let durmins = Math.floor(this.duration / 60);
    let dursecs = Math.floor(this.duration - durmins * 60);
    if (cursecs < 10) { cursecs = 0 + cursecs; }
    if (dursecs < 10) { dursecs = 0 + dursecs; }
    if (curmins < 10) { curmins = 0 + curmins; }
    if (durmins < 10) { durmins = 0 + durmins; }
    this.currentT = curmins + ':' + cursecs;
    this.fullDuration = durmins + ':' + dursecs;
  }


  playAudio() {
    this.Stop = true;
    this.Play = false;
    this.duration = this.song.duration;
    this.song.play();

    const stopInterval = setInterval(x => {
      this.currentTime = this.song.currentTime;
      this.time();
      if (Math.floor(this.currentTime) === Math.floor(this.duration)) {
        clearInterval(stopInterval);
        if (this.song.loop === true ) {
          console.log('loop');
          this.Stop = true;
          this.Play = false;
        } else {
          this.song.currentTime = 0;
          this.Stop = false;
          this.Play = true;
          this.song.pause();
        }
      }
    }, 1000);
    console.log(this.song.currentTime);
  }

  stopAdio() {
    this.Stop = false;
    this.Play = true;
    this.song.pause();
  }

  updateSetting(event) {
    this.song.currentTime = event.value;
    this.currentTime = event.value;
    this.playAudio();
  }

  updateVolume(event) {
    this.song.volume = event.value / 100;
  }

  muteVolume() {
    this.soundMute = true;
    this.song.muted = true;
  }

  unMuteVolume() {
    this.soundMute = false;
    this.song.muted = false;
  }

  likeHeart() {
    this.Heart = !this.Heart;
  }

  repeatSongs() {
    this.repeatSong = !this.repeatSong;
    this.song.loop = this.repeatSong;
  }

  shuffleSong() {
    this.shuffle = !this.shuffle;
  }

}
