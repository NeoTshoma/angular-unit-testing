import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ITunesActions } from 'src/app/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  searchTerm = '';
  constructor(private store: Store) {}

  searchItunes() {
    this.store.dispatch(ITunesActions.searchItunes({searchTerm: this.searchTerm}));
  }
}
