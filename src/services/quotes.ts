import {Quote} from "../data/quote.interface";

export class QuotesService{
    private favoriteQuotes: Quote[] = [];
    
    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
    }
    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
           return quoteEl.id == quote.id; 
        });
        this.favoriteQuotes.splice(position,1);
    }
    getFavoriteQuotes(){
        return this.favoriteQuotes.slice(); 
    }
    
    //excute find method, with each element, return true of match element id
    isQuoteFavorite(quote: Quote){
        return this.favoriteQuotes.find((quoteEl: Quote)=> {
            return quoteEl.id == quote.id;
        })
    }
}