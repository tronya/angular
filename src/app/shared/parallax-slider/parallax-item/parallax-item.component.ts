import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import {VideoItem} from '../../video-item';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-parallax-slider-item',
  templateUrl: './parallax-item.component.html',
  styleUrls: ['./parallax-item.component.scss'],
  animations: [
    trigger('appearingImage', [
      state('in', style({
          opacity: 0
        })
      ),
      transition('void <=> *', [
        style({opacity: 1}),
        animate('300ms')
      ])
    ]),
  ]
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
