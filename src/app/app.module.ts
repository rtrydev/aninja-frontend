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
import { RatingComponent } from './anime-details/rating/rating.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterItemComponent } from './characters/character-item/character-item.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentItemComponent } from './comments/comment-item/comment-item.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterFormComponent } from './login/register-form/register-form.component';

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
    AnimeDetailsComponent,
    RatingComponent,
    CharactersComponent,
    CharacterItemComponent,
    CommentsComponent,
    CommentItemComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }