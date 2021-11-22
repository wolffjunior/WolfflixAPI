import { Injectable } from '@angular/core';
import { MoviesPopular } from '../_model/Movies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIkey, BaseURL } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class FilmesService {


  public movies: MoviesPopular[] = []
  

  constructor(
    private httpClient: HttpClient,
  ) { }

    public getMoviesPopular():Observable<any> {
      return this.httpClient.get(`${BaseURL}movie/popular?api_key=${APIkey}&language=en-US&page=1`)
    }

    public getMovieDetails(id: number): Observable<any> {
      console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA', id)
      return this.httpClient.get(`${BaseURL}movie/${id}?api_key=${APIkey}&language=en-US`)
  }
    
}
