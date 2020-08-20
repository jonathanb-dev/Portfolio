import { Component, OnInit } from '@angular/core';

// Models
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills: Skill[] = [
    { name: '.NET', expertise: 70 },
    { name: '.NET MVC', expertise: 50 },
    { name: '.NET Core', expertise: 40 },
    { name: 'Angular', expertise: 40 },
    { name: 'SQL', expertise: 60 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
