import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places/places.service';
import { Place } from './place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor( private acRoute: ActivatedRoute, private placeServ: PlacesService,
               private router: Router, private alertCtr: AlertController) { }

  ngOnInit() {
    this.acRoute.paramMap.subscribe(paramMap => {
     const recipedId = paramMap.get('placeId')
     this.place = this.placeServ.getPlace(Number(recipedId))
    })
  }

  async deletePlace(){
   const alertEle = await this.alertCtr.create({
      header: "Are you sure, you want delete it ?",
      buttons:[
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placeServ.deletePlace(Number(this.place.id))
            this.router.navigate(['/places'])
          }
        }
      ]
    })
   await alertEle.present();
  }

}
