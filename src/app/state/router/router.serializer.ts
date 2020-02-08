import { RouterStateSnapshot } from '@angular/router'
import { BaseRouterStoreState, RouterStateSerializer } from '@ngrx/router-store'
import {INavSection} from "../../features/games/types/nav-item.interface";
import { get } from 'lodash'


export interface IRouterState extends BaseRouterStoreState {
  navSection?: INavSection,
}

export class RouterSerializer implements RouterStateSerializer<IRouterState> {
  serialize(routerState: RouterStateSnapshot): IRouterState {
    const { url } = routerState;
    const navSection: INavSection = get(routerState, 'root.firstChild.firstChild.data', null) as INavSection | null;
    return { url, navSection }
  }
}
