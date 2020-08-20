import { Component, OnInit, Input } from '@angular/core';

// Models
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
