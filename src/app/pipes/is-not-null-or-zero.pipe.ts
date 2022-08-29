import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotNullOrZero'
})
export class IsNotNullOrZeroPipe implements PipeTransform {

  transform(value: number | null): boolean {
    return !((value === 0) || (value === null));
  }

}
