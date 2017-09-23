import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProvidersPage } from '../../pages/providers/providers';

@Component({
  selector: 'test-page',
  templateUrl: 'testpage.html'
})
export class TestPage {

  private selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    console.log(this.selectedItem);
  }

  showProviders(){
    this.navCtrl.push(ProvidersPage, {
      item: 'ok dude'
    });
  }
}
