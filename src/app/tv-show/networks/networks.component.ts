import {Component, Input, OnInit} from '@angular/core';
import {generateImage} from '../../shared/helpers';
import {INetworks} from '../tv-show-detail/tv-show-detail-model';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent implements OnInit {
  @Input() networks: INetworks[];
  generateImage = generateImage;

  constructor() {
  }

  ngOnInit() {
  }

}
