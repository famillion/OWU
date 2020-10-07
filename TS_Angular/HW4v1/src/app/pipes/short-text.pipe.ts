import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, symbols: number, ...args: string[]): string {
    let str = '';
    for (let i = 0; i < symbols; i++) {
      str += value[i];
    }
    return str + '...';
  }

}
