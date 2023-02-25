import { Component } from '@angular/core';
import { DataOperationService } from './data-operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  loginName:string = '';
  userRole :string = '';
  loginStatus:boolean = false;
  photo:string='';

  __dataService:DataOperationService;

  constructor(dataService:DataOperationService)
  {
    this.__dataService = dataService;
    this.loginStatus = false;
  }

  verifyUser(name:string,password:string)
  {
    console.log("inside component ts : "+name+" & "+password);
    
    this.loginStatus = this.__dataService.doLogin(name,password);
    
    if(this.loginStatus == true)
    {
      // becoz local storage may give u null
      this.userRole =  localStorage.getItem('role') || '';
      this.loginName = localStorage.getItem('username') || '';
      this.photo = localStorage.getItem('photo') || '';
      
      console.log("username "+this.loginName)
      console.log("user role "+this.userRole);
      
    }
  }

  doLogout()
  {
    this.loginName = '';
    this.userRole = '';
    this.loginStatus= false;
    this.photo='';
    this.__dataService.doUserLogout();
  }

}
