import { createAction, props } from "@ngrx/store";
import { ITunesResult } from "src/app/models/iTunes.model";

export const searchItunes = createAction(
    '[Search] Search iTunes',
    props<{searchTerm: string}>()
);

export const searchItunesSuccess = createAction(
    '[Search] Search iTunes Success',
    props<{searchResults: ITunesResult[]}>()
);

export const searchItunesError = createAction(
    '[Search] Search iTunes Error',
    props<{errors: ErrorEvent}>()
);
