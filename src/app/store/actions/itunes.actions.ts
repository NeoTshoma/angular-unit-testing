import { createAction, props } from "@ngrx/store";

export const searchItunes = createAction(
    '[Search] Search iTunes',
    props<{searchTerm: string}>()
);

export const searchItunesSuccess = createAction(
    '[Search] Search iTunes Success',
    props<{searchResults: any}>()
);

export const searchItunesError = createAction(
    '[Search] Search iTunes Error',
    props<{errors: ErrorEvent}>()
);
