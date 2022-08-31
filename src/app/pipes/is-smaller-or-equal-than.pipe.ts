import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isSmallerOrEqualThan'
})
export class IsSmallerOrEqualThanPipe implements PipeTransform {
  transform(value: number | null, arg: number): boolean {
    if (value === null) {
      return false;
    } else {
      return value <= arg;
    }
  }
}
