import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isOpen$!: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {

  }

}