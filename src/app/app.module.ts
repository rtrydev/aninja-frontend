import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimeListComponent } from './animes/anime-list/anime-list.component';
import { AnimeListItemComponent } from './animes/anime-list/anime-list-item/anime-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimesComponent,
    AnimeListComponent,
    AnimeListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
