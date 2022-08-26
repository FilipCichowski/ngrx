import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {toggleSideNav} from "../../states/navigation/navigation.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path: string = "assets/img/snail_logo.jpg"

  onSidebarToggle(): void {
    this.store.dispatch(toggleSideNav());
  }

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
