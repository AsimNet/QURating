import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddRatePage} from '../add-rate/add-rate';

/**
 * Generated class for the DocterRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docter-rate',
  templateUrl: 'docter-rate.html',
})
export class DocterRatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocterRatePage');
  }
  gotoAddRate(){
    this.navCtrl.push(AddRatePage)
    }
}
