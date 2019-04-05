import { Injectable } from '@angular/core';
import {IMovies} from 'app/i-movies'
// import Movies from "../sample-movies.js"

@Injectable()
export class MoviesService {
  moviesArray: Array<IMovies> //= Movies

  getMovies(){
    return this.moviesArray;
  }

  getMovie(id:number){
    return this.moviesArray.filter(e => e.id === id);
  }

  constructor() { 

  }

}
