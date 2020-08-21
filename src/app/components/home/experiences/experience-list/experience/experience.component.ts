import { Component, OnInit, Input } from '@angular/core';

// Models
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experience: Experience;

  constructor() { }

  ngOnInit(): void {
  }

  getFrontEndTechnologies(): string {
    return this.experience.frontEndTechnologies
      .map(technology => technology.name)
      .join(', ');
  }

  getBackEndTechnologies(): string {
    return this.experience.backEndTechnologies
      .map(technology => technology.name)
      .join(', ');
  }
}
