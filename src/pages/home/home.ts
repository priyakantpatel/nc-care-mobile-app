import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../../pages/testpage/testpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  cancerTypeVisibility: boolean = false;
  treatmentVisibility: boolean = false;

  constructor(private navCtrl: NavController) {
    this.items = ['Ek', 'Be', 'Tran'];
  }

  itemSelected(item) {
    console.log(item);

    this.navCtrl.push(TestPage, {
      item: item
    });
  }
}
