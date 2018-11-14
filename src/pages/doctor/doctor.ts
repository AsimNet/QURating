import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DocterRatePage} from '../docter-rate/docter-rate';
import {AddRatePage} from '../add-rate/add-rate';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }
  gotoDocterRate(){
    this.navCtrl.push(DocterRatePage)
    }
  gotoAddRate(){
    this.navCtrl.push(AddRatePage)
    }
}
