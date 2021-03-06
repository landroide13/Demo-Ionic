import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'places',
    children:[
      {
        path:"",
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path:":placeId",
        loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
      }
    ]
  },
  {
    path: 'place-add',
    loadChildren: () => import('./place-add/place-add.module').then( m => m.PlaceAddPageModule)
  },
  // {
  //   path: 'place-detail',
  //   loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
