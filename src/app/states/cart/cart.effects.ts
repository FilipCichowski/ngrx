import {Actions, createEffect, ofType} from "@ngrx/effects"
import {Injectable} from "@angular/core";
import * as cartActions from "./cart.actions";
import {tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable()
export class cartEffects {
  placeOrderEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartActions.placeOrder),
      tap(action => {
          this.openSnack('Złożono zamówienie!');
          this.router.navigate(['/success']);
        }
      )
    );
  }, {dispatch: false})
  claerCartEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartActions.clearCart),
      tap(action => {
          this.openSnack('Wyczyszczono koszyk');
        }
      )
    );
  }, {dispatch: false})
  deleteProductEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartActions.deleteProductFromCart),
      tap(action => {
          this.openSnack('Produkt został usunięty z koszyka');
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

  constructor(private actions$: Actions, public snackBar: MatSnackBar, private router: Router) {
  }
}
