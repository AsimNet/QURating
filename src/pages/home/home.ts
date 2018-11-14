import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CollegePage} from '../college/college'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  gotoCollege(){
    this.navCtrl.push(CollegePage)
  }

}
