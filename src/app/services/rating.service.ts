import { Injectable } from '@angular/core';
import { Rating } from '../models/rating-model';
import { AnimeRating } from '../models/anime-rating-model';



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

  private animes: AnimeRating[] = [
    new AnimeRating(1, 'Higurashi no naku koro ni', 'https://cdn.myanimelist.net/images/anime/12/19634.jpg', this.getAvgRatingForAnime(1)),
    new AnimeRating(2, 'Death Note', 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', this.getAvgRatingForAnime(2)),
    new AnimeRating(3, 'Kaguya-sama wa korurasetai', 'https://cdn.myanimelist.net/images/anime/1430/118919.jpg', this.getAvgRatingForAnime(3)),
    new AnimeRating(4, 'Komi-san wa, Comyushou desu', 'https://cdn.myanimelist.net/images/anime/1108/121157.jpg', this.getAvgRatingForAnime(4)),
    new AnimeRating(5, 'Jojo no kimyouna bouken', 'https://cdn.myanimelist.net/images/anime/3/40409.jpg', this.getAvgRatingForAnime(5)),
    new AnimeRating(6, 'Spy x Family', 'https://cdn.myanimelist.net/images/anime/1440/121382.jpg', this.getAvgRatingForAnime(6)),
    new AnimeRating(7, 'Aharen-san wa Hakarenai', 'https://cdn.myanimelist.net/images/anime/1612/120636.jpg', this.getAvgRatingForAnime(7)),
    new AnimeRating(8, 'Umineko no naku koro ni', 'https://cdn.myanimelist.net/images/anime/10/17709.jpg', this.getAvgRatingForAnime(8)),
    new AnimeRating(9, 'Bakemonogatari', 'https://cdn.myanimelist.net/images/anime/11/75274.jpg', this.getAvgRatingForAnime(9)),
    new AnimeRating(10, 'Fullmetal Alchemist: Brotherhood', 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', this.getAvgRatingForAnime(10))
  ];

  public getRatingsForAnime(animeId : number){
    return this.ratings.filter(x => x.animeId == animeId).slice();
  }

  public getAvgRatingForAnime(animeId : number){
    let sum = 0.0;
    let animeRatings = this.ratings.filter(x => x.animeId == animeId).slice();
    animeRatings.forEach(element => {
      sum += element.note;
    });
    if(animeRatings.length === 0) return 0.0;
    return sum / animeRatings.length;
  }

  getAnimesWithTopRating(){
    return this.animes.slice();
  }

  constructor() { }
}
