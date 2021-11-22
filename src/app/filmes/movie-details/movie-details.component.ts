import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/_services/filmes.service';

@Component({
  selector: 'app-Movie-details',
  templateUrl: './Movie-details.component.html',
  styleUrls: ['./Movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: any

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(results => {
      const {id} = results
      console.log(id)
      this.getMovieDetails(id);
    })
  }



  getMovieDetails(id: any){
    this.filmesService.getMovieDetails(id).subscribe((data) => {
      this.movieDetails = data
      console.log(this.movieDetails)
    })
  }

}
