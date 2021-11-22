import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../_services/series.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.sass']
})
export class SeriesComponent implements OnInit {

  series: any
  

  constructor(
    public seriesService: SeriesService
  ) { }

  ngOnInit(){
    this.getSeriesInfo();
  }


  getSeriesInfo(){
    this.seriesService.getSeriesGeral().subscribe(({results}: any) =>{
      this.series = results
      console.log('Resultados ', this.series)
    })
  }

  getSerieImage(path : string){
    return `https://image.tmdb.org/t/p/w300/${path}`
  }


  onClick(id: number){
    console.log(id)
  }
}
