import {Actions, createEffect, ofType} from "@ngrx/effects"
import {Injectable} from "@angular/core";
import {tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {addProduct, deleteSingleProductWithId} from "./cart/cart.actions";
import * as commonActions from "./cart-stock.actions";

@Injectable()
export class cartStockEffects {
  addEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commonActions.addProducts),
      tap(action => {
         this.openSnack(`Dodano ${action.amount} produkt(y/ów) do koszyka`);
        }
      )
    );
  }, {dispatch: false})
  deleteEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(commonActions.removeProduct),
      tap(action => {
          this.openSnack(`Usunięto ${action.amount} produkt(y/ów) z koszyka`);
        }
      )
    );
  }, {dispatch: false})

  openSnack(message: string):void {
    this.snackBar.open(message, 'OK', {
      verticalPosition: 'top',
      panelClass: ['main-snack']
    });
  }

  constructor(private actions$: Actions, public snackBar: MatSnackBar) {
  }
}

