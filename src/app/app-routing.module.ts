import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { MovieDetailsComponent } from './filmes/movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { SeriesDetailsComponent } from './series/series-details/series-details.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path:"", 
    children:[
      {
        path: "popular",
        component: FilmesComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: "series",
        component: SeriesComponent
      },
      {
        path: "filmes/movie-details/:id",
        component: MovieDetailsComponent
      },
      {
        path: "series/series-details/:id",
        component: SeriesDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
