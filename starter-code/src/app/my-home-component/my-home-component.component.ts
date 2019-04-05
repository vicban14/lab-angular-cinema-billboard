import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
import {IMovies} from 'app/i-movies'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
  movies:Array<IMovies>

  constructor(private moviesService:MoviesService) { 
    this.movies = this.moviesService.getMovies()
  }

  ngOnInit() {
  }

}
