import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();//listens to button click to display results

    uvotes = 0;//starting point for votes in two variables
    dvotes = 0;

    upVote(highlight){
      this.uvotes = this.uvotes + 1;//adds one on mouse click
    }

    downVote(){
      this.dvotes = this.dvotes + 1;
    }

  constructor() { }

  ngOnInit() {
  }

}
