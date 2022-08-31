import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {toggleSideNav} from "../../states/navigation/navigation.actions";
import {appState} from "../../utilities/AppState";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  path: string = "assets/images/snail_logo.jpg"

  onSidebarToggle(): void {
    this.store.dispatch(toggleSideNav());
  }

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
  }

}
