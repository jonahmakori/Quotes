import { Component, OnInit,Input } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class DetailsComponent implements OnInit {
  @Input() quote:Quote

  upvotes=0;
  downvotes=0;


  constructor() { }

  ngOnInit() {
  }

}
