import {Component, Input, OnInit} from '@angular/core';
import {ICrew} from '../../models/episodes.model';
import {generateImage} from '../../shared/helpers';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent {
  public getImage = generateImage;
  @Input() public crew: ICrew[];

}
