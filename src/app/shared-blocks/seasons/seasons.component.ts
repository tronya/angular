import {Component, Input, OnInit} from '@angular/core';
import {generateImage} from '../../shared/helpers';
import {ISeasons} from '../../shared/video-item';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  generateImage = generateImage;
  @Input() seasons: ISeasons[];

  constructor() {
  }

  ngOnInit() {
  }

}
