import { Component, OnInit } from '@angular/core';

// Font awesome
import { faMapMarkerAlt, faPaperPlane, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  faPaperPlane = faPaperPlane;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFileDownload = faFileDownload;

  constructor() { }

  ngOnInit(): void {
  }
}
