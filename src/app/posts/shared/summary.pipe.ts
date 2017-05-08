import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, length?: any): any {
    const limit = (length) ? parseInt(length) : 50;

    if (value && value.length > limit) {
      return value.substring(0, limit) + '...';
    }

    return value;
  }

}
