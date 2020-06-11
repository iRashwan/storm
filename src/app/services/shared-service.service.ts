import { Injectable , EventEmitter  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private message = new BehaviorSubject('First Message');
  sharedMessage = this.message.asObservable();

  invokeSongObjectFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  nextMessage(message: any) {
    this.message.next(message);
  }

  sendSongObject() {
    this.invokeSongObjectFunction.emit();
  }
}
