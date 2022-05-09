import { Injectable } from '@angular/core';

import { Place } from '../place-detail/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private Places: Place[] = [
    {id: 1, title: 'Berlin', imageUrl:'https://theplanetd.com/images/places-to-visit-in-berlin-germany.jpg', comments:['Cool', 'awesome']},
    {id: 2, title: 'Dublin', imageUrl:'https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg', comments:['Cool', 'awesome']},
    {id: 3, title: 'Saigon', imageUrl:'https://i2.wp.com/eternalarrival.com/wp-content/uploads/2018/11/saigon-street-scene.jpg?fit=1150%2C767&ssl=1', comments:['Cool', 'awesome']},
  ]

  constructor() { }

  getPlaces(){
    return [...this.Places]
  }

  getPlace(id: number){
   return {
     ...this.Places.find(place => {
      return place.id === id
    })
   };
  }

  deletePlace(id: number){
    this.Places = this.Places.filter(place => {
      return place.id !== id
    })
  }

  addPlace(title, imageUrl){
    this.Places.push({
      title,
      imageUrl,
      comments:[],
      id: this.Places.length + 1
    });
  }


}
