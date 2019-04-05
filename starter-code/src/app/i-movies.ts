export interface IMovies {
    id: number,
    title: string,
    poster: string,
    synopsys: string,
    genre: Array<string>,
    year: number,
    director: string,
    actors: Array<string>,
    hours?: Array<string>,
    room?: number
}
