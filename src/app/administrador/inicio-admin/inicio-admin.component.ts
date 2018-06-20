import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit, DoCheck {
  public identity;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService) { }

    ngOnInit(){
      this.identity = this._userService.getIdentity();
      console.log(this.identity);
    }
  
    ngDoCheck(){
      this.identity = this._userService.getIdentity();
    }
  
    logOut(){
      localStorage.clear();
      this.identity = null;
      this._router.navigate(['admin']);
  
    }
}
