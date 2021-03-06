import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { Movie, movies } from 'src/movie';
import { loggedInStatus } from '../loginstatus';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  images = [
    '../assets/images/spiderman.jpg',
    '../assets/images/matrix.jpg',
    '../assets/images/gucci.jpg',
  ];

  moviesList: Movie[];

  constructor(private http: HttpClient) {}

  loggedIn() {
    return loggedInStatus.loggedIn;
  }

  ngOnInit(): void {
    this.moviesList = movies;
    let response = this.http.get('http://localhost:8081/api/v1/movies');
    response.subscribe((data) => (this.moviesList = data as Movie[]));
  }
}
