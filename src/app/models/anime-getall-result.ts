import { Anime } from "./anime-model";

export interface AnimeGetAllResult {
    allCount: number;
    animes: Anime[];
}