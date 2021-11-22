import { Component, OnInit } from '@angular/core';
import { homeService } from '../_services/home.service';
import { SeriesService } from '../_services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  topRated: any
  nowPlaying: any
  tvSeries: any

  constructor(
    public homeService: homeService,
    public seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.getTopRatedMovies()
    this.getNowplayingMovies()
    this.getTvSeries()
  }

  getTopRatedMovies(){
    this.homeService.getTopRatedMovie().subscribe(({results}: any) =>{
      this.topRated = results
      console.log('Resultados ', this.topRated)
    })
  }

  getNowplayingMovies(){
    this.homeService.getNowPlaying().subscribe(({results}: any) =>{
      this.nowPlaying = results
    })
  }

  getTvSeries(){
    this.seriesService.getSeriesGeral().subscribe(({results}: any) =>{
      this.tvSeries = results
    })
  }


  getSerieImage(path : string){
    return `https://image.tmdb.org/t/p/w300/${path}`
  }


}
