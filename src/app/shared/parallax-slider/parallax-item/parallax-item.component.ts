import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {VideoItem} from '../../video-item';

@Component({
  selector: 'app-parallax-slider-item',
  templateUrl: './parallax-item.component.html',
  styleUrls: ['./parallax-item.component.css']
})
export class ParallaxSliderItemComponent implements OnInit {
  @Input() slide: VideoItem;
  @Input() slideIndex: number;
  @Input() totalSlides: number;
  @Input() nextSlideAction: boolean;
  @Input() prevSlideAction: boolean;
  @Output() slideClick = new EventEmitter<VideoItem>();

  faArrowCircleRight = faArrowCircleRight;
  isLoaded = false;

  clickItemHandler(item: VideoItem) {
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
