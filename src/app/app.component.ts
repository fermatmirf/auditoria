import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { fadeAnimation } from './administrador/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]

})
export class AppComponent {
  title = 'app';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router){}
}
