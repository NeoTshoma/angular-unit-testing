import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpRequestService } from "src/app/services/http-request/http-request.service";
import { ITunesActions } from '..';

@Injectable()
export class ITunesEffects {
    constructor(
        private httpRequestService: HttpRequestService,
        private actions$: Actions<any>
    ) { }

    searhItunes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ITunesActions.searchItunes),
            mergeMap(({ searchTerm }) =>
                this.httpRequestService.searchITunes(searchTerm).pipe(
                    map((response: any) =>
                        ITunesActions.searchItunesSuccess({ searchResults: response?.results })
                    ),
                    catchError((errors) =>
                        of(ITunesActions.searchItunesError({ errors }))
                    )
                )
            )
        )
    );
}