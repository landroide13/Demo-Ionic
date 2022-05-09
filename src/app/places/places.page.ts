import { Component, OnInit } from '@angular/core';
 import { PlacesService } from './places.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  Places = []

  constructor( private placeServ: PlacesService) { }

  ngOnInit() {
   this.Places = this.placeServ.getPlaces();
  }

  ionViewWillEnter(){
    this.Places = this.placeServ.getPlaces();
  }

}
