import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input () page;

  @Output() newPage= new EventEmitter();

  btnClickedLeft()
  {
    if(this.page>1)
    this.newPage.emit(this.page-1);
  }

  btnClickedRight()
  {
    this.newPage.emit(this.page+1);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
