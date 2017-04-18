import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {QuotePage} from "../quote/quote";
import {ModalController} from "ionic-angular";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quotes: Quote[];
  constructor (private quoteService: QuotesService,
                private modalCtrl: ModalController){

  }
  ionViewWillEnter(){
    this.quotes= this.quoteService.getFavoriteQuotes();
  }
  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }
}
