import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {IRouterState} from "./router.serializer";
import {routerSelectors} from "./router.selectors";

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  navSection$ = this.store.select(routerSelectors.selectNavSection);
  url$ = this.store.select(routerSelectors.selectUrl);

  constructor(
    private store: Store<IRouterState>,
  ) {
  }
}
