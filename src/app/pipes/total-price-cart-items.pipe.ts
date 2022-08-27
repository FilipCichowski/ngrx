import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../utilities/Product";

@Pipe({
  name: 'totalPriceCartItems'
})
export class TotalPriceCartItemsPipe implements PipeTransform {

  transform(products: Product[] | null): number {
    return products === null ? 0 : products.reduce((acc, prod) => acc + prod.price, 0);
  }

}
