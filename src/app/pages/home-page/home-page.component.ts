import { Component, OnInit } from '@angular/core';

// Services
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.setTitle('Hello, I\'m John. Nice to meet you!');
    this.bannerService.setMessage('I am a .NET back-end developer from Belgium.');
  }
}
