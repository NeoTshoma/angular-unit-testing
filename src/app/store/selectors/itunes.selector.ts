import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITunesState } from "../state/itunes.state";

const searchSelectorKey = createFeatureSelector<ITunesState>('search');

export const getItunesSearchLoading = createSelector(
    searchSelectorKey,
    (state: ITunesState) => state.itunesSearchLoading
);

export const getItunesSearchResultSet = createSelector(
    searchSelectorKey,
    (state: ITunesState) => state.iTunesSearchResults
);

export const getItunesSearchError = createSelector(
    searchSelectorKey,
    (state: ITunesState) => state.itunesSearchError
);

export const getItunesSearchErrors = createSelector(
    searchSelectorKey,
    (state: ITunesState) => state.itunesSearchErrors
);
