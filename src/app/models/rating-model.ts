import { User } from "./user-model";

export class Rating {
    public animeId: number;
    public note : number;
    public comment: string;
    public submitterId: number;

    constructor(animeId: number, note: number, comment: string, submitterId: number){
        this.animeId = animeId;
        this.note = note;
        this.comment = comment;
        this.submitterId = submitterId;
    }
}