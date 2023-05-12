import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ITunesResult } from 'src/app/models/iTunes.model';
import { getItunesSearchError, getItunesSearchLoading, getItunesSearchResultSet } from 'src/app/store/selectors/itunes.selector';
import { Audio } from 'src/app/models/audio.model';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.scss']
})
export class ResultsViewComponent implements OnInit, OnDestroy {
  resultList$!: Observable<ITunesResult[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  private ngUnsubscribe = new Subject();
  audioList: Audio [] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.resultList$ = this.store.select(getItunesSearchResultSet);
    this.loading$ = this.store.select(getItunesSearchLoading);
    this.error$ = this.store.select(getItunesSearchError);

    this.resultList$.pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((audioFiles:ITunesResult[]) => {
      if (audioFiles) {
        this.audioList = [];

        audioFiles.map((a) => {
          this.audioList.push({
            url: a.previewUrl,
            title: a.trackCensoredName,
            cover: a.artworkUrl100
          });
        });
      }
    })
  }

  ngOnDestroy(): void {
      this.ngUnsubscribe.next({});
      this.ngUnsubscribe.complete();
  }
}
