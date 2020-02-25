import {Component, Input, OnInit} from '@angular/core';
import {generateImage} from '../../shared/helpers';
import {IEpisodeAir} from '../tv-show-detail/tv-show-detail-model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss', '../../../assets/headings.scss']
})

export class EpisodeComponent implements OnInit {
  generateImage = generateImage;

  @Input() episode: IEpisodeAir;

  constructor() {
  }

  ngOnInit() {
  }

}
