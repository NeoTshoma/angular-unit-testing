import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NavigationComponent } from './navigation.component';
import { ITunesState, iTunesInitialState } from 'src/app/store/state/itunes.state';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
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
      declarations: [NavigationComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      providers: [
        provideMockStore({
          initialState
        })
      ]
    }).compileComponents();

    mockStore = TestBed.get(Store);
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to search', () => {
    spyOn(mockStore, 'dispatch');
    component.searchTerm = 'Sound 1';

    component.searchItunes();

    expect(mockStore.dispatch).toHaveBeenCalled();
  })
});
