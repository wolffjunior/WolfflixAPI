import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { APIkey, BaseURL } from "src/environments/environment"
import { topRatedMovies } from "../_model/Home"

@Injectable({
    providedIn: 'root'
})

export class homeService{

    public topRated: topRatedMovies[]=[]


    constructor(
        private httpClient: HttpClient,
    ){}

    public getTopRatedMovie(): Observable<any> {
        return this.httpClient.get(`${BaseURL}movie/top_rated?api_key=${APIkey}&language=en-US&page=1`)
    }

    public getNowPlaying(): Observable<any>{
        return this.httpClient.get(`${BaseURL}movie/now_playing?api_key=${APIkey}&language=en-US&page=1`)
    }

    


}