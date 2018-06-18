import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  verMas():void{
    this._router.navigate(['/servicios']);

  }
}
