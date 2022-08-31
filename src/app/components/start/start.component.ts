import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  isSidebarOpen$!: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.isSidebarOpen$ = this.store.pipe(
      map(state => state.navigation.isSidebarOpen)
    )
  }
}
