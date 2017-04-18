import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  constructor (private viewCtrl: ViewController){}
  onClose(){
    //Delete this view (remember to have another page behind this modal/page)
    this.viewCtrl.dismiss();
  }
}
