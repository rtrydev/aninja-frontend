import { Injectable } from '@angular/core';
import { Rating } from '../models/rating-model';
import { AnimeRating } from '../models/anime-rating-model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private ratings: Rating[] = [
    new Rating(1, 10, 'Watching Higurshi is like locking a group of happy people in a test chamber, only coming back to find they\'ve hacked each other into a bloody mess. Its horrific, its shocking, and yet a part of you, cannot help but wonder, how did it happen? \n\nThe curiosity takes over... and so you repeat the experiment, knowing full well that those cute looking teenagers you just sent are going to end up as bloody pulps. But hey, at least each time they die, you\'re one step closer to figuring out why they died, it\'s all good.', 1),
    new Rating(1, 9, 'Higurashi epitomizes how you should never judge something by its cover. At first glance, it looks like a simple, generic harem series or a lame, cliched romance. This anime, however, is nothing short of genius. The whole setting, atmosphere, and mood are incredibly well executed. The plot may seem simple at first, a new kid moving to a strange, new town and meeting new friends. Beneath the exterior appearance of this seemingly tame series, however, lies a dark story of murder, violence, and mystery.', 2),
    new Rating(1, 9, 'Higurashi no naku koro ni happens to be a particular favourite of mine, not only because of its horrifically high gore content, but for the number of times it managed to catch me off guard. I found it hard to believe how someone could commit such stomach-churning acts of violence and mental torture. It’s the original shock at this fact that compels the viewer to continue watching this highly addictive bloodbath of an anime.', 3),
    new Rating(2, 6, 'ok', 1),
    new Rating(2, 7, 'ok ok', 2),
    new Rating(2, 3, 'meh', 3)
  ];

  

  public getRatingsForAnime(animeId : number){
    return this.ratings.filter(x => x.animeId == animeId).slice();
  }

  public getAvgRatingForAnime(animeId : number){
    return this.httpClient
      .get<number>('http://rtrydev.com/api/anime/' + animeId + '/rating/avg');
  }

  

  constructor(private httpClient: HttpClient) { }
}
