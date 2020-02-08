import { RouterReducerState } from '@ngrx/router-store'
import { createFeatureSelector, createSelector } from '@ngrx/store'

import { IRouterState } from './router.serializer'
import {StoreKey} from "../state.module";

const selectRouter = createFeatureSelector<RouterReducerState<IRouterState> | undefined>(StoreKey.ROUTER);

const selectNavSection = createSelector(
  selectRouter,
  (store) => store && store.state.navSection,
);

const selectUrl = createSelector(
  selectRouter,
  (store) => store && store.state.url,
);

export const routerSelectors = {
  selectNavSection,
  selectUrl,
};
