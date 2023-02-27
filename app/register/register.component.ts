import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataOperationService } from '../data-operation.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  __userService:DataOperationService;
   
  allUsers:User[]=[];
status=false;
message='';
  p:User = new User('','','',0,'','','');

  constructor(userService:DataOperationService, private router:Router)
  {
    this.__userService = userService;
    // this.allUsers = this.__userService.getUserArr();

  }

  doFormSubmit(){
    //console.log(this.p);
    this.__userService.Submit(this.p).subscribe(
      data=>{
        this.status=true;
        this.message="User Added";
        console.log(data);
      },
      error=>{
        console.log(error);

      }
    )
  }
  moveToLogin(){
    this.router.navigate(['login1'])
   }


    }


