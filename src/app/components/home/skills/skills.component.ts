import { Component, OnInit } from '@angular/core';

// Font awesome
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  constructor() { }

  ngOnInit(): void {
  }
}
