import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoreInfoPage } from '../../pages/moreinfo/moreinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  cancerTypeVisibility: boolean = true;

  constructor(private navCtrl: NavController) {
    this.items = ['Leukemia', 'Skin Cancer', 'Breast Cancer', 'Brain Tumors', 'Bone Cancer'];
  }

  itemSelected(item) {
    console.log(item);

    this.navCtrl.push(MoreInfoPage, {
      item: item
    });
  }
}
