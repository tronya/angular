import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'colorToHEX', pure: true})

export class ColorToHexPipe implements PipeTransform {
  transform(colors: [number, number, number]) {
    if (colors) {
      if (colors.length === 3) {
        const [r, g, b] = colors;
        const rgbaToHex = () => '#' + [r, g, b].map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }).join('');
        return rgbaToHex();
      }
    }
    return 'none';
  }
}
