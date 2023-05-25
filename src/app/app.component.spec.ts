import { NavigationComponent } from './components/navigation/navigation.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ResultsViewComponent } from './components/results-view/results-view.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ITunesState, iTunesInitialState } from './store/state/itunes.state';
import { Store } from '@ngrx/store';

describe('AppComponent', () => {
  let mockStore: MockStore<{
    iTunesSearchResults: [];
    itunesSearchError: false;
    itunesSearchErrors: null;
    itunesSearchLoading: false;
  }>;
  let initialState: ITunesState = {
    ...iTunesInitialState
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        NavigationComponent,
        ResultsViewComponent
      ],
      providers: [
        provideMockStore({
          initialState
        })
      ]
    }).compileComponents();

    mockStore = TestBed.get(Store);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
