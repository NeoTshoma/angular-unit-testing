import { ITunesResult } from "src/app/models/iTunes.model";

export interface ITunesState {
    iTunesSearchResults: ITunesResult[] | [];
    itunesSearchLoading: boolean;
    itunesSearchError: boolean;
    itunesSearchErrors: ErrorEvent | null;
}

export const iTunesInitialState: ITunesState = {
    iTunesSearchResults: [],
    itunesSearchError: false,
    itunesSearchErrors: null,
    itunesSearchLoading: false
}
