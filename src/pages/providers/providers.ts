import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'providers-page',
  templateUrl: 'providers.html'
})
export class ProvidersPage {

  private selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }

  startOver() {
    console.log('[ProvidersPage] startOver');
    this.navCtrl.popToRoot();
  }
}
