import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MatSliderChange } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.scss']
})
export class HomeUsersComponent implements OnInit {

  // get tickInterval(): number | 'auto' {
  //   return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  // }
  // set tickInterval(value) {
  //   this._tickInterval = coerceNumberProperty(value);
  // }
  message = 'Ahmed';
  counter = 0;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  songObject = {};
  // private _tickInterval = 1;
  constructor(private sharedService: SharedServiceService) { }


  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.songObject = {
      SongImage: '../../../assets/img/monkey.jpg',
      SongURL: 'https://res.cloudinary.com/zoak-store/video/upload/v1580997726/The_Chainsmokers_-_Closer_ft._Halsey_fw4dib.mp3',
      SongName: 'Dance Monkey',
      SongAuthor: 'Jack Lion',
      Like: true
    };
    this.sharedService.nextMessage(JSON.stringify(this.songObject));
    // this.sharedService.nextMessage(this.message);
  }

  firstComponentFunction() {
    this.sharedService.sendSongObject();
  }


}

