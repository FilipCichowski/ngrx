import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // isSidebarOpen$!: Observable<any>;
  //
  // constructor(private store: Store<any>) {}
  //
  ngOnInit() {
    // this.isSidebarOpen$ = this.store.pipe(
    //   map(state => state.navigation.isSidebarOpen)
    // )
  }
}
