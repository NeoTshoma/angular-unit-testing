import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../state/core.state";
import * as ItunesReducer from './itunes.reducers';

export const reducers: ActionReducerMap<AppState> = {
   search: ItunesReducer.reducer
}

export const metaReducers: MetaReducer<AppState>[] = [];
