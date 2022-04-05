export class AnimeRating {
    public id: number;
    public translatedTitle: string;
    public imgUrl: string;
    public rating: number;

    constructor(id: number, translatedTitle: string, imgUrl: string, rating: number){
        this.id = id;
        this.translatedTitle = translatedTitle;
        this.imgUrl = imgUrl;
        this.rating = rating;
    }
}