import {Component, Input, OnInit} from '@angular/core';
import {VideoItem} from '../video-item';

@Component({
  selector: 'app-parallax-slider',
  templateUrl: './parallax-slider.component.html',
  styleUrls: ['./parallax-slider.component.css']
})
export class ParallaxSliderComponent implements OnInit {
  @Input() items: VideoItem[];
  @Input() height = 500;

  nextSlideAction = false;
  prevSlideAction = false;
  $sliderItems;

  slideClicked(index: number, event: VideoItem) {
    if (index) {
      const leftItems = this.$sliderItems.slice(0, index);
      this.$sliderItems = this.$sliderItems.slice(index);
      setTimeout(() => {
        this.$sliderItems.push(...leftItems);
      }, 900);
    }
  }

  prevSlide() {
    console.log('prev');
    let {$sliderItems: slItems} = this;
    slItems = slItems.unshift(slItems.pop());
    this.prevSlideAction = true;
    setTimeout(() => {
      this.prevSlideAction = false;
    }, 300);
  }

  nextSlide() {
    console.log('next');
    let {$sliderItems: slItems} = this;
    this.nextSlideAction = true;

    setTimeout(() => {
      const removedItem = slItems.shift();
      this.nextSlideAction = false;
      setTimeout(() => {
        slItems = slItems.push(removedItem);
      }, 600);
    }, 600);
  }

  constructor() {
  }

  ngOnInit() {
    this.$sliderItems = this.items;
  }

}
