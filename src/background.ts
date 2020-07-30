import { of, from, Subject, Observable, combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BasicCommands } from './app/basic-commands';
import { SubSink } from 'subsink';

export class Background implements BasicCommands {
  start = 'initAction';
  stop = 'stopAction';
  sub$ = new SubSink();

  // Intermediate streams
  svgSubject$ = new Subject<boolean>();
  updated$ = new Subject<boolean>();

  // Merge streams
  updatedSvg$: Observable<any>;
  rules = {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.twitch.tv', schemes: ['https'] },
      }),
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()],
  };

  constructor() {
    this.initConfig();
    this.stateConverger();

    this.updatedSvg$ = combineLatest([
      this.updated$.asObservable(),
      this.svgSubject$.asObservable(),
    ]);

    this.updatedSvg$.subscribe(([x, y]) => {
      if (x && !y) {
        this.chromeRemoveListener();
      }
      if (!x && y) {
        this.chromeTabOnUpdate();
      }
    });
  }

  initConfig() {
    chrome.runtime.onInstalled.addListener(() => {
      chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([this.rules]);
      });
      this.chromeTabOnUpdate();
    });
  }

  // Check if storage is online
  checkTwpoints(): void {
    chrome.storage.sync.get('estado', (keys) => {
      keys.estado === true
        ? this.svgSubject$.next(keys.estado)
        : this.svgSubject$.next(false);
    });
  }
  chromeTabOnUpdate() {
    chrome.tabs.onUpdated.addListener(listen);
  }

  chromeRemoveListener() {
    chrome.tabs.onUpdated.removeListener(listen);
  }

  hasListener() {
    const listener = chrome.tabs.onUpdated.hasListener(listen);
    this.updated$.next(listener);
  }

  stateConverger() {
    chrome.runtime.onMessage.addListener((message) => {
      if (message.start === this.start) {
        this.checkTwpoints();
        this.hasListener();
      }
      if (message.stop === this.stop) {
        this.checkTwpoints();
        this.hasListener();
      }
    });
  }
}

export function initSearch() {
  chrome.tabs.query({ url: 'https://www.twitch.tv/*' }, (result) => {
    from(result).subscribe((x) => {
      chrome.tabs.sendMessage(x.id, { start: background.start });
    });
  });
}

export function listen(_, changeinfo) {
  of(changeinfo)
    .pipe(
      filter((info) => {
        const re = /https\:\/\/www.twitch.tv\/\w+/;
        return re.test(info.url);
      })
    )
    .subscribe(() => initSearch());
}

const background = new Background();
