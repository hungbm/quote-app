import { Component,OnInit } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';

import quote from '../../data/quote';
import {Quote} from '../../data/quote.interface';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {

  //constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }
  
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  
  ngOnInit(){
    this.quoteCollection = quote;
  } 

}
