import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrLength'
})
export class ArrLengthPipe implements PipeTransform {
  transform(arr: unknown[] | null): number {
    return arr === null ? 0 : arr.length;
  }
}
