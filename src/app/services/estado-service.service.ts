import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { SubSink } from 'subsink';
import { BasicCommands } from '../basic-commands';

@Injectable({
  providedIn: 'root',
})
export class EstadoServiceService implements BasicCommands {
  // Object actions
  start = 'initAction';
  stop = 'stopAction';

  // Subscriptions
  sub$ = new SubSink();
  constructor() {}
  initSearch() {
    chrome.tabs.query({ url: 'https://www.twitch.tv/*' }, (result) => {
      this.sub$.sink = from(result).subscribe((x) => {
        chrome.tabs.sendMessage(x.id, { start: this.start });
      });
    });
  }
  stopSearch() {
    chrome.tabs.query({ url: 'https://www.twitch.tv/*' }, (result) => {
      this.sub$.sink = from(result).subscribe((x) => {
        chrome.tabs.sendMessage(x.id, { stop: this.stop });
      });
    });
    this.sub$.unsubscribe();
  }
}
