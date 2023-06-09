import { metaReducers, reducers } from './store/reducers/core.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResultsViewComponent } from './components/results-view/results-view.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {HttpClientModule} from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { ITunesEffects } from './store/effects/itunes.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { AngMusicPlayerModule } from 'ang-music-player';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResultsViewComponent,
    SearchBarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([
      ITunesEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    FormsModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
