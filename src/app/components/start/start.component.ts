import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {appState} from "../../states/AppState";
import {isNavigationOpen} from "../../states/navigation/navigation.selector";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  isSidebarOpen$!: Observable<boolean>;

  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.isSidebarOpen$ = this.store.select(isNavigationOpen);
  }
}
