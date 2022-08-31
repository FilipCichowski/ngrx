import {createSelector} from '@ngrx/store';
import {appState} from "../AppState";
import { NavigationState } from './navigation.reducer';

const selectNavigation = (state: appState) => state.navigation

export const isNavigationOpen = createSelector(
  selectNavigation,
  (state: NavigationState) => state.isSidebarOpen
)
