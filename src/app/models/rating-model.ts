import { User } from "./user-model";

export class Rating {
    public animeId: number;
    public mark : number;
    public comment: string;
    public submitterId: number;

    constructor(animeId: number, mark: number, comment: string, submitterId: number){
        this.animeId = animeId;
        this.mark = mark;
        this.comment = comment;
        this.submitterId = submitterId;
    }
}