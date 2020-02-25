import {Component, Input, OnInit} from '@angular/core';
import {IProductionCompanies} from '../tv-show-detail/tv-show-detail-model';
import {generateImage} from '../../shared/helpers';

@Component({
  selector: 'app-production-companies',
  templateUrl: './production-companies.component.html',
  styleUrls: ['./production-companies.component.css']
})
export class ProductionCompaniesComponent implements OnInit {
  generateImage = generateImage;
  @Input() productionCompanies: IProductionCompanies[];

  constructor() {
  }

  ngOnInit() {
  }

}
