import { Component, OnInit } from '@angular/core';

import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  photos = [];

  constructor(private photoServ: PhotosService) {}

  ngOnInit(){
    this.photoServ.getPhotos().subscribe(data => {
      this.photos = data
    });
  }

}
