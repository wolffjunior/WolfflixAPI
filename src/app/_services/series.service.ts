import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { SeriesGeral } from "../_model/Series"
import { APIkey, BaseURL } from "src/environments/environment"

@Injectable({
    providedIn: 'root'
})
export class SeriesService {


    public series: SeriesGeral[] = []


    constructor(
        private httpClient: HttpClient,
    ) { }

    public getSeriesGeral(): Observable<any> {
        return this.httpClient.get(`${BaseURL}tv/popular?api_key=${APIkey}&language=en-US&page=1`)
    }

    public getSeriesDetails(id: number): Observable<any> {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA', id)
        return this.httpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${APIkey}`)
    }
}
