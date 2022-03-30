
export class Anime {
    public id: number;
    public translatedTitle: string;
    public imgUrl: string;

    constructor(id: number, translatedTitle: string, imgUrl: string){
        this.id = id;
        this.translatedTitle = translatedTitle;
        this.imgUrl = imgUrl;
    }
}