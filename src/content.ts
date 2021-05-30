import { Subject } from 'rxjs';
import { map, filter, delay } from 'rxjs/operators';
import { from } from 'rxjs';
import { SubSink } from 'subsink';
import { BasicCommands } from './app/basic-commands';

export class Content implements BasicCommands {
  start = 'initAction';
  stop = 'stopAction';

  // Subject
  svgSubject$ = new Subject<boolean>();

  // Mutation Observer
  mutationObserver: MutationObserver;

  // Subscriptions Handler
  contentSub$ = new SubSink();

  touchPuntos = (sub: HTMLButtonElement) => sub.click();

  constructor() {
    this.checkTwpoints();
    this.addListeners();

    this.mutationObserver = new MutationObserver(this.callback);

    this.contentSub$.sink = this.svgSubject$
      .pipe(delay(3000))
      .subscribe((val) => {
        if (val === true) {
          this.startMutationObserver();
        }
      });
  }

  // Mutador Observador
  callback(mutaciones: MutationRecord[]): void {
    from(mutaciones)
      .pipe(
        filter(
          (x) =>
            (x.target as Element).querySelector(
              '.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.VGQNd'
            ) !== null
        ),
        map(
          (x) =>
            (x.target as Element).querySelector(
              '.ScCoreButton-sc-1qn4ixc-0.ScCoreButtonSuccess-sc-1qn4ixc-5.VGQNd'
            ) as HTMLButtonElement
        )
      )
      .subscribe((x) => x.click());
  }

  // Check if storage is online
  checkTwpoints(): void {
    chrome.storage.sync.get('estado', (keys) => {
      keys.estado === true
        ? this.svgSubject$.next(keys.estado)
        : this.svgSubject$.next(false);
    });
  }

  stopMutationObserver() {
    // Stop mutation Observer
    this.mutationObserver.disconnect();
    this.contentSub$.unsubscribe();
    // Before remove
    chrome.runtime.sendMessage({ stop: this.stop });
    // Chrome remove key twpoint
    chrome.storage.sync.remove('estado');
  }

  startMutationObserver() {
    chrome.storage.sync.set({ estado: true });
    chrome.runtime.sendMessage({ start: this.start });
    const downChatBoxContainer = document.querySelector(
      '[data-test-selector=chat-input-buttons-container]'
    );
    this.mutationObserver.observe(downChatBoxContainer, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  addListeners() {
    chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
      if (message.start === this.start) {
        this.startMutationObserver();
      }
      if (message.stop === this.stop) {
        this.stopMutationObserver();
      }
    });
  }
}

const content = new Content();
