import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TreatmentsTrialsPage } from '../treatmentstrials/treatmentstrials';

@Component({
  selector: 'page-moreinfo',
  templateUrl: 'moreinfo.html'
})
export class MoreInfoPage {

  ageGroup: number = 2;
  stage: number = 2;

  constructor(private navCtrl: NavController) {
  }

  next(item) {
    console.log(item);

    this.navCtrl.push(TreatmentsTrialsPage, {
      ageGroup: this.ageGroup,
      stage: this.stage
    });
  }
}
