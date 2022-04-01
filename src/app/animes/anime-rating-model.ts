export class AnimeRating {
    public id: number;
    public translatedTitle: string;
    public imgUrl: string;
    public avgRating: number;

    constructor(id: number, translatedTitle: string, imgUrl: string, avgRating: number){
        this.id = id;
        this.translatedTitle = translatedTitle;
        this.imgUrl = imgUrl;
        this.avgRating = avgRating;
    }
}