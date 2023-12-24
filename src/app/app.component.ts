import { AfterViewInit, Component, ElementRef } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // Sample array of names
  names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank'];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.createNameList();
  }

  private createNameList(): void {
    const container = d3.select(this.el.nativeElement).select('#list');

    const svgWidth = 800;
    const svgHeight = 800;

    const svg = container
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const textElements = svg
      .selectAll('text')
      .data(this.names)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * 100)
      .attr('y', svgHeight / 2)
      .attr('font-size', '16px')
      .attr('fill', 'black');

    function animateText() {
      textElements
        .transition()
        .duration(2000)
        .attr('x', svgWidth)
        .on('end', function () {
          d3.select(this).attr('x', -this.getBBox().width);
          animateText();
        });
    }

    animateText();
  }
}
