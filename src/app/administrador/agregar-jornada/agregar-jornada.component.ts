import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-agregar-jornada',
  templateUrl: './agregar-jornada.component.html',
  styleUrls: ['./agregar-jornada.component.css']
})
export class AgregarJornadaComponent implements OnInit {
  public user: User;
  public status: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(registerForm):void{
    this.userService.register(this.user).subscribe(
      (response) => {
        if(response.user && response.user._id){
          console.log(response.user);
          this.status = 'success';
          registerForm.reset();
        }
        else{
          this.status = 'error';
        }
      },
      (error) => {
        console.log(<any>error);
    });
}
}
