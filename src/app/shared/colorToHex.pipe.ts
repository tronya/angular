import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'colorToHEX', pure: true})

export class ColorToHexPipe implements PipeTransform {
  transform(colors: [] = []) {
    if (colors) {
      if (colors.length) {
        const rgbToHex = ({r, g, b}) => '#' + [r, g, b].map(x => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }).join('');
        // @ts-ignore
        return rgbToHex({r: colors[0], g: colors[1], b: colors[2]});
      }
    }
    return 'none';
  }
}
