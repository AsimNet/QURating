import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CollegePage } from '../pages/college/college';
import { DoctorPage } from '../pages/doctor/doctor';
import { DocterRatePage } from '../pages/docter-rate/docter-rate';
import { AddRatePage } from '../pages/add-rate/add-rate';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CollegePage,
    DoctorPage,
    DocterRatePage,
    AddRatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CollegePage,
    DoctorPage,
    DocterRatePage,
    AddRatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
