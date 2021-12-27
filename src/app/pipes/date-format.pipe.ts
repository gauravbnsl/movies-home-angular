import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let date = value.split(' ');
    return date[(date.length - 1)];
  }

}
