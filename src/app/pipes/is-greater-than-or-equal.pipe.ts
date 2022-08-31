import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isGreaterThanOrEqual'
})
export class IsGreaterThanOrEqualPipe implements PipeTransform {
  transform(value: number | null, arg: number): boolean {
    if (value === null) {
      return false;
    } else {
      return value >= arg;
    }
  }
}
