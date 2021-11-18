import { Injectable } from '@angular/core';
import { MoviesPopular } from '../_model/Movies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {


  public movies: MoviesPopular[] = []
  

  constructor(
    private httpClient: HttpClient,
  ) { }

    public getMoviesPopular():Observable<any> {
      return this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=33aca62f5382fd9e99d030f68d10ab50&language=en-US&page=1')
    }
    
}
