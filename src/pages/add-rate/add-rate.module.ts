import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRatePage } from './add-rate';

@NgModule({
  declarations: [
    AddRatePage,
  ],
  imports: [
    IonicPageModule.forChild(AddRatePage),
  ],
})
export class AddRatePageModule {}
