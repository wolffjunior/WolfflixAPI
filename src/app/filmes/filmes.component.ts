import { Component, OnInit } from '@angular/core';
import { MoviesPopular } from '../_model/Movies';
import { FilmesService } from '../_services/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.sass']
})
export class FilmesComponent implements OnInit {
  images: any[] = [];
  movies: any
  
  constructor(
    public filmesService: FilmesService
  ) { }

  ngOnInit() {

    // this.getter()
    this.getMoviesPopularInfo();
    // this.getMoviesName();
  }

  /* getter(){
      this.filmesService.getMovieImage().subscribe((data: MoviesPopular) =>{
        this.images = data
        console.log('A data que recebemos ', data)
        console.log('A varivavel que preenchemos ', this.images)
      })
  } */

  getMoviesPopularInfo(){
    this.filmesService.getMoviesPopular().subscribe(({results}: any) =>{
      this.movies = results
      console.log('A varivavel que preenchemos ', this.movies)
    })
  }

  // async getMoviesName(){
  //   this.filmesService.getMoviesPopular().subscribe((data) => {
  //     for (let index = 0; index < data.results.length; index++) {
  //       const element = data.results[index];
  //       console.log(element.vote_average);
        
  //     }
  //   })
  // }

  getMovieImage(path : string){
    return `https://image.tmdb.org/t/p/w300/${path}`
  }
}
