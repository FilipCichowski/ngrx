import {Actions, createEffect, ofType} from "@ngrx/effects"
import {Injectable} from "@angular/core";
import {addProduct} from "./cart.actions";
import {flatMap, map, switchMap, tap} from "rxjs";
import {ToastServiceService} from "../../services/toast-service.service";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class cartEffects {


  constructor(private actions$: Actions, private toastService: ToastServiceService, public snackBar: MatSnackBar) {
    const add = this.actions$.pipe(
      ofType(addProduct),
      tap(action => {
          console.log(action.product);
          this.snackBar.open(`Dodano ${action.amount} produkt(y/ów) do koszyka`);
        }
      )
    )
    add.subscribe();
  }
}
