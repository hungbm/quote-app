import { Component } from '@angular/core';
import {ViewController,NavParams} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  person: string;
  text: string;
  constructor (private viewCtrl: ViewController,
                private navParams: NavParams){}
  onClose(remove= false){
    //Delete this view (remember to have another page behind this modal/page)
    this.viewCtrl.dismiss(remove);
  }
  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
    
  }
  
}
