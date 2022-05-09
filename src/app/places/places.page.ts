import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { PlacesService } from './places.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  Places = []

  constructor( private placeServ: PlacesService, private router: Router) { }

  ngOnInit() {
   this.Places = this.placeServ.getPlaces();
  }

  ionViewWillEnter(){
    this.Places = this.placeServ.getPlaces();
  }

  addNewPlace(){
    this.router.navigate(['/place-add'])
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

}
