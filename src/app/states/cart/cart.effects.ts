import {Actions, createEffect, ofType} from "@ngrx/effects"
import {Injectable} from "@angular/core";
import {addProduct, deleteSingleProductWithId} from "./cart.actions";
import {flatMap, map, switchMap, tap} from "rxjs";
import {ToastServiceService} from "../../services/toast-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class cartEffects {
  addEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProduct),
      tap(action => {
          console.log(action.product);
          this.snackBar.open(`Dodano ${action.amount} produkt(y/ów) do koszyka`);
        }
      )
    );
  }, {dispatch: false})
  deleteEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteSingleProductWithId),
      tap(action => {
          this.snackBar.open(`Usunięto produkt z koszyka`);
        }
      )
    );
  }, {dispatch: false})

  constructor(private actions$: Actions, private toastService: ToastServiceService, public snackBar: MatSnackBar) {
  }
}
