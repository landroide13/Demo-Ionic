import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  private Places = [
    {id: 1, title: 'Berlin', imageUrl:'https://theplanetd.com/images/places-to-visit-in-berlin-germany.jpg', comments:['Cool', 'awesome']},
    {id: 2, title: 'Dublin', imageUrl:'https://media-cdn.tripadvisor.com/media/photo-s/13/91/4b/da/the-quats-temple-bar.jpg', comments:['Cool', 'awesome']},
    {id: 3, title: 'Saigon', imageUrl:'https://i2.wp.com/eternalarrival.com/wp-content/uploads/2018/11/saigon-street-scene.jpg?fit=1150%2C767&ssl=1', comments:['Cool', 'awesome']},
  ]

  constructor() { }

  ngOnInit() {
  }

}
