import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements
  OnInit {

  //Store retrieved data
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private  quoteService: QuotesService) {

  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   Add  elvis operator (?) in template to use this approach
  // }
   ngOnInit(){
    this.quoteGroup = this.navParams.data;
   }
  onAddToFavorite(selectedQuote: Quote){
     const alert = this.alertCtrl.create({
       title: 'Add Quote',
       subTitle: 'Are you sure?',
       message: 'Are you you want this?',
       buttons: [
         {
           text: 'No, I changed my mind!',
           role: 'cancel',
           handler: ()=>{
             console.log('Cancelled!');
           }
         },
         {
         text: 'Yes, go ahead',
         handler: () =>{
           this.quoteService.addQuoteToFavorites(selectedQuote);
         }
       }
       ]
     });
     alert.present();
  }
  
  onRemoveFromFavorite(quote: Quote){
      
  }
  
  isFavorite(quote: Quote){
      return this.quoteService.isQuoteFavorite();
  }
}
