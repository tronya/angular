import {Component, Input, OnInit} from '@angular/core';
import {generateImage} from '../../shared/helpers';
import {IProductionCompanies} from '../../shared/video-item';

@Component({
  selector: 'app-production-companies',
  templateUrl: './production-companies.component.html',
  styleUrls: ['./production-companies.component.scss']
})
export class ProductionCompaniesComponent implements OnInit {
  generateImage = generateImage;
  @Input() productionCompanies: IProductionCompanies[];

  constructor() {
  }

  ngOnInit() {
  }

}
