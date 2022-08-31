import {createReducer, on} from '@ngrx/store';
import {toggleSideNav} from "./navigation.actions";

export interface NavigationState {
  isSidebarOpen: boolean;
}

const navInitialState: NavigationState = {
  isSidebarOpen: false
}

export const navReducer = createReducer(
  navInitialState,
  on(toggleSideNav,
    (state: NavigationState) => (
      {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      }
    )
    )
)
