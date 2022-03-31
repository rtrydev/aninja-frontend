import { User } from "../user-model";

export class Rating {
    public animeId: number;
    public note : number;
    public comment: string;
    public submitter: User;

    constructor(animeId: number, note: number, comment: string, submitter: User){
        this.animeId = animeId;
        this.note = note;
        this.comment = comment;
        this.submitter = submitter;
    }
}