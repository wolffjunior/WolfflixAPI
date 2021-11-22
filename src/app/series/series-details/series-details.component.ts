import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDetails } from 'src/app/_model/SeriesDetails';
import { SeriesService } from 'src/app/_services/series.service';


@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.sass']
})
export class SeriesDetailsComponent implements OnInit {

  seriesDetails: any

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(results => {
      const {id} = results
      console.log(id)
      this.getSeriesDetails(id);
    })
  }

  getSeriesDetails(id: any){
    this.seriesService.getSeriesDetails(id).subscribe((data) => {
      this.seriesDetails = data
      console.log(this.seriesDetails)
    })
  }


}
