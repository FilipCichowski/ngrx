import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSidebarOpen$!: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.isSidebarOpen$ = this.store.pipe(
      map(state => state.navigation.isSidebarOpen)
    )
  }
}
