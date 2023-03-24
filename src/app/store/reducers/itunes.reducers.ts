import { Action, createReducer, on } from "@ngrx/store";
import { ITunesActions } from "..";
import { iTunesInitialState, ITunesState } from "../state/itunes.state";

export const iTunesReducer = createReducer(
    iTunesInitialState,
    on(ITunesActions.searchItunes, (state) => {
        return {
            ...state,
            itunesSearchLoading: true,
            itunesSearchError: false,
            itunesSearchErrors: null,
            iTunesSearchResults: []
        };
    }),
    on(ITunesActions.searchItunesSuccess, (state, { searchResults }) => {
        return {
            ...state,
            itunesSearchLoading: false,
            itunesSearchError: false,
            itunesSearchErrors: null,
            iTunesSearchResults: searchResults
        };
    }),
    on(ITunesActions.searchItunesError, (state, { errors }) => {
        return {
            ...state,
            itunesSearchLoading: false,
            itunesSearchError: true,
            itunesSearchErrors: errors,
            iTunesSearchResults: []
        }
    })
);

export function reducer(state: ITunesState | undefined, action: Action) {
    return iTunesReducer(state, action);
}  