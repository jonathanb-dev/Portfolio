import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerContentService {
  title = new BehaviorSubject(null);
  message = new BehaviorSubject(null);

  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
  }

  setMessage(message: string) {
    this.message.next(message);
  }
}
