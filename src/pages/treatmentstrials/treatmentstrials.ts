import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvidersPage } from '../../pages/providers/providers';

@Component({
  selector: 'page-moreinfo',
  templateUrl: 'treatmentstrials.html'
})
export class TreatmentsTrialsPage {

  items: any;
  treatments: any ;

  constructor(private navCtrl: NavController) {
    this.items = [
      'Surgery',
      'Radiation Therapy',
      'Chemotherapy',
      'Immunotherapy',
      'Targeted Therapy',
      'Hormone Therapy',
      'Stem Cell Transplant',
      'Precision Medicine']
  }


  next(item) {
    console.log(item);

    this.navCtrl.push(ProvidersPage, {
      treatments: this.treatments
    });
  }
}
