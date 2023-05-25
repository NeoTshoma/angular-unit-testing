import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsViewComponent } from './results-view.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  ITunesState,
  iTunesInitialState,
} from 'src/app/store/state/itunes.state';
import { Store } from '@ngrx/store';
import { AngMusicPlayerComponent } from 'ang-music-player';
import { getItunesSearchError, getItunesSearchLoading, getItunesSearchResultSet } from 'src/app/store/selectors/itunes.selector';

describe('ResultsViewComponent', () => {
  let component: ResultsViewComponent;
  let fixture: ComponentFixture<ResultsViewComponent>;
  let mockStore: MockStore<{
    iTunesSearchResults: [];
    itunesSearchError: false;
    itunesSearchErrors: null;
    itunesSearchLoading: false;
  }>;
  let initialState: ITunesState = {
    ...iTunesInitialState,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsViewComponent, AngMusicPlayerComponent],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents();

    mockStore = TestBed.get(Store);
    fixture = TestBed.createComponent(ResultsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set add the result set to the audio list on Init', () => {
    mockStore.overrideSelector(getItunesSearchResultSet, [
      { artistId: 1, artistName: 'Test 1 Artist' },
      { artistId: 2, artistName: 'Test 2 Artist' },
    ]);
    mockStore.overrideSelector(getItunesSearchLoading, false);
    mockStore.overrideSelector(getItunesSearchError, false);

    component.ngOnInit();

    expect(component.audioList.length).toEqual(2);
  });
});
