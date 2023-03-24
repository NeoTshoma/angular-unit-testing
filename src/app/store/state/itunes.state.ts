export interface ITunesState {
    iTunesSearchResults: any;
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
