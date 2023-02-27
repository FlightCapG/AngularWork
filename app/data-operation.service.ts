import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserLoginDTO } from './user';

interface AppUser{
  userName:string;
  password:string;
  role:string;
  photo:string;
  
 
}


@Injectable({
  providedIn: 'root'
})
export class DataOperationService {

  baseURL = 'http://localhost:9090';
  loginURL : string = this.baseURL+'/user/login/';
  registeruserEndpoint : string = this.baseURL+'/user/register';

  allAppUsers:AppUser[] = [];
  
  userArr:User[] = [];

  constructor(private http:HttpClient) { 
    let user1:AppUser = {
      userName:"srushti",
      password : "123",
      role:"User",
      photo:"srushti.jpg"
    }
    let user2:AppUser = {
      userName:"hrutuja",
      password : "123",
      role:"Instructor",
      photo:"hrutuja.jpg"
    }
    let user3:AppUser = {
      userName:"suresh",
      password : "123",
      role:"Student",
      photo:"suresh.png"
    }
    let user4:AppUser = {
      userName:"ramesh",
      password : "123",
      role:"User",
      photo:"ramesh.png"
    }
    let user5:AppUser = {
      userName:"admin",
      password : "admin",
      role:"admin",
      photo:"admin.jpg"
    }

    this.allAppUsers = [user1,user2,user3,user4,user5];

  }

doSpringLogin(userId:string,password:string):Observable<UserLoginDTO>
{
  let a:string = this.loginURL+userId+'/'+password;
  return this.http.get<UserLoginDTO>(`${a}`);

}

  doLogin(ipUserName:string,ipPassword:string):boolean
  {
    localStorage.removeItem('userName')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')
     
    console.log("inside Service : "+ipUserName+" & "+ipPassword);
   
    for(let i=0;i<this.allAppUsers.length;i++)
    {
       let thisUser:AppUser = this.allAppUsers[i];

       if(thisUser.userName == ipUserName && thisUser.password == ipPassword)
       {

          localStorage.setItem("username",ipUserName);
          localStorage.setItem("role",thisUser.role);
          localStorage.setItem("loginStatus",true+'');
          localStorage.setItem("photo",thisUser.photo);
          
          console.log("inside service for true ");
          
          return true; // note the break is not applicable in forEach because of window property
       }

    }
    return false;
    
  } //end of doLogin

  Submit(user:User):Observable<User>{
    console.log("Inside the method :"+user);
    //console.log(" Total Passengers Are :- "+this.passengerArr.length);

    return this.http.post<User>(`${this.registeruserEndpoint}`,user);

  }

  getUserArr():User[]
  {
    return this.userArr;
  }

  doUserLogout()
  {
    localStorage.removeItem('userName')
    localStorage.removeItem('role')
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('photo')

    console.log("inside Service logout ");

  }
}

 
 
  

 
