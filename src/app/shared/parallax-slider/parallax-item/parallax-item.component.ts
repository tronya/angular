import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {TvShowModel} from '../../../tv-show/tv-show.model';

@Component({
  selector: 'app-parallax-slider-item',
  templateUrl: './parallax-item.component.html',
  styleUrls: ['./parallax-item.component.css']
})
export class ParallaxSliderItemComponent implements OnInit {
  @Input() slide: TvShowModel;
  @Input() slideIndex: number;
  @Input() totalSlides: number;
  @Input() nextSlideAction: boolean;
  @Input() prevSlideAction: boolean;
  @Output() slideClick = new EventEmitter<TvShowModel>();

  faArrowCircleRight = faArrowCircleRight;
  isLoaded = false;

  clickItemHandler(item: TvShowModel) {
    this.slideClick.emit(item);
  }

  imageLoaded() {
    this.isLoaded = true;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
