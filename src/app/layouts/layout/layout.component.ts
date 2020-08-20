import { Component, OnInit, ViewChild } from '@angular/core';

// Angular material
import { MatSidenav } from '@angular/material/sidenav';

// Font awesome
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.sidenav.toggle();
  }
}
