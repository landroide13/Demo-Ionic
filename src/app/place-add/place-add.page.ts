import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placeServ: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title, url){
    this.placeServ.addPlace(title.value, url.value)
    this.router.navigate(['/places'])
  }

}
