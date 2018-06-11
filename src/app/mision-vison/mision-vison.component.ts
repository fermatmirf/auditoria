import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mision-vison',
  templateUrl: './mision-vison.component.html',
  styleUrls: ['./mision-vison.component.css']
})
export class MisionVisonComponent implements OnInit {
  public title:string;
  constructor() {
    this.title ='EH ura'
   }

  ngOnInit() {
  }

}
