import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  moviesArray: Array<IMovies>;

  getMovies(){
    return this.moviesArray;
  }

  getMovie(id:number){
    return this.moviesArray.filter(e => e.id === id);
  }

  constructor() { }

}
