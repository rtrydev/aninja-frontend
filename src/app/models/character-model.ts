export enum Gender {
    Male,
    Female,
    Undefined
}

export class Character {
    public id: number;
    public originalName: string;
    public translatedName: string;
    public imageUrl: string;
    public gender: Gender;
    public voiceActor: string;
    public voiceActorImageUrl: string;

    constructor(id: number, originalName: string, translatedName: string, imageUrl: string, gender: Gender, voiceActor: string, voiceActorImageUrl: string) {
        this.id = id;
        this.originalName = originalName;
        this.translatedName = translatedName;
        this.imageUrl = imageUrl;
        this.gender = gender;
        this.voiceActor = voiceActor;
        this.voiceActorImageUrl = voiceActorImageUrl;
    }
}