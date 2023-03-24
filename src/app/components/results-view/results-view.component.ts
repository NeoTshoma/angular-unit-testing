import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITunesResult } from 'src/app/models/iTunes.model';
import { getItunesSearchError, getItunesSearchLoading, getItunesSearchResultSet } from 'src/app/store/selectors/itunes.selector';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.scss']
})
export class ResultsViewComponent implements OnInit {
  resultList$!: Observable<ITunesResult[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<boolean>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.resultList$ = this.store.select(getItunesSearchResultSet);
    this.loading$ = this.store.select(getItunesSearchLoading);
    this.error$ = this.store.select(getItunesSearchError);
  }
}
