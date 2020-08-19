import { Component, OnInit, ViewChild } from '@angular/core';

// Angular material
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.sidenav.toggle();
  }
}
