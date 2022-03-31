import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimesComponent } from './animes/animes.component';
import { AnimeListComponent } from './animes/anime-list/anime-list.component';
import { AnimeListItemComponent } from './animes/anime-list/anime-list-item/anime-list-item.component';
import { AnimeTopListComponent } from './animes/anime-top-list/anime-top-list.component';
import { AnimeTopListItemComponent } from './animes/anime-top-list/anime-top-list-item/anime-top-list-item.component';
import { FooterComponent } from './footer/footer.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AnimesComponent},
  { path: 'anime/:id', component: AnimeDetailsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimesComponent,
    AnimeListComponent,
    AnimeListItemComponent,
    AnimeTopListComponent,
    AnimeTopListItemComponent,
    FooterComponent,
    AnimeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }