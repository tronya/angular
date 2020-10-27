import {Component, Input, OnInit} from '@angular/core';
import {GuestStars} from '../../models/episodes.model';
import {generateImage} from '../../shared/helpers';

@Component({
  selector: 'app-guests-stars',
  templateUrl: './guests-stars.component.html',
  styleUrls: ['./guests-stars.component.scss']
})
export class GuestsStarsComponent implements OnInit {
  public getImage = generateImage;
  @Input() public guestStars: GuestStars[];

  ngOnInit() {
    console.log(this.guestStars);
  }
}
