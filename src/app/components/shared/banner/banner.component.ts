import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

// Services
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {
  title: string;
  message: string;
  titleSubscription: Subscription;
  messageSubscription: Subscription;

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.titleSubscription = this.bannerService.title.subscribe(title => this.title = title);
    this.messageSubscription = this.bannerService.message.subscribe(message => this.message = message);
  }

  ngOnDestroy(): void {
    this.titleSubscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
}
