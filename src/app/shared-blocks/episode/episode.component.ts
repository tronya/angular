import {Component, Input} from '@angular/core';
import {EpisodeModel} from '../../models/episodes.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: [
    './episode.component.scss',
    '../../../assets/headings.scss'
  ]
})

export class EpisodeComponent {
  @Input() episode: EpisodeModel;
}
