import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes=[
  new Quote(1, 'Nelson Mandela', 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.', new Date(1990, 5, 10)),
  new Quote(2, 'Mohandas Gandhi', 'Strength does not come from physical capacity. It comes from an indomitable will.', new Date(1950, 3, 23)),
  new Quote(3, 'Rick Flores', 'We have to come for them before they come for us, it is that simple', new Date(2012, 8, 17)),

]

addNewIdea(idea) {
let quoteLength = this.quotes.length;
quote.id = quoteLength+1;
quote.addedDate = new Date(idea.completeDate)
this.quotes.push(idea)
}

deleteQuote(isComplete, index) {
  if (isAdded) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

    if (toDelete) { this.quotes.splice(index, 1) }
  }
}

  constructor() { }

  ngOnInit() {
  }

}
