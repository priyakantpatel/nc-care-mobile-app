import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoreInfoPage } from '../pages/moreinfo/moreinfo';
import { TreatmentsTrialsPage } from '../pages/treatmentstrials/treatmentstrials';
import { ProvidersPage } from '../pages/providers/providers';
import { TestPage } from '../pages/testpage/testpage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoreInfoPage,
    TreatmentsTrialsPage,
    ProvidersPage,
    TestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoreInfoPage,
    TreatmentsTrialsPage,
    ProvidersPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
