import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   styleUrls: ['home.css'],

})
export class HomePage {
  initValue: number;
  initValue2: number;
depValue: number;
  constructor(public navCtrl: NavController) {

  }
compute () {
    this.depValue = (this.initValue - (this.initValue * this.initValue2/100));

}

}

