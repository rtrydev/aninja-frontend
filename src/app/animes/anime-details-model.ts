export enum Status {
    NotYetAired,
    CurrentlyAiring,
    FinishedAiring
}

export enum Demographic {
    Kids,
    Shounen,
    Shoujo,
    Seinen,
    Josei
}

export class AnimeDetails {
    public id: number;
    public originalTitle: string;
    public translatedTitle: string;
    public imgUrl: string;
    public description: string;
    public startDate: any;
    public endDate: any;
    public episodeCount: number;
    public status: Status;
    public demographic: Demographic;

    constructor(id: number, originalTitle: string, translatedTitle: string, imgUrl: string, description: string, startDate: any, endDate: any, episodeCount: number, status: Status, demographic: Demographic){
        this.id = id;
        this.originalTitle = originalTitle;
        this.translatedTitle = translatedTitle;
        this.imgUrl = imgUrl;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.episodeCount = episodeCount;
        this.status = status;
        this.demographic = demographic;
    }
    
}