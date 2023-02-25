import { Injectable } from '@angular/core';

interface AppUser{
  name:string;
  password:string;
  role:string;
  photo:string;
  
 
}


@Injectable({
  providedIn: 'root'
})
export class DataOperationService {

  allAppUsers:AppUser[] = [];

  constructor() {
    let user1:AppUser = {
      name:"srushti",
      password : "123",
      role:"Passenger",
      photo:"srushti.jpg"
    }
    let user2:AppUser = {
      name:"hrutuja",
      password : "123",
      role:"Passenger",
      photo:"hrutuja.jpg"
    }
    let user3:AppUser = {
      name:"suresh",
      password : "123",
      role:"attendant",
      photo:"suresh.png"
    }
    let user4:AppUser = {
      name:"ramesh",
      password : "123",
      role:"attendant",
      photo:"ramesh.png"
    }
    let user5:AppUser = {
      name:"admin",
      password : "admin",
      role:"admin",
      photo:"admin.jpg"
    }

    this.allAppUsers = [user1,user2,user3,user4,user5];

   }

   doLogin(ipName:string,ipPassword:string):boolean
   {
     localStorage.removeItem('name')
     localStorage.removeItem('role')
     localStorage.removeItem('loginStatus')
     localStorage.removeItem('photo')
 
     
     
     console.log("inside Service : "+ipName+" & "+ipPassword);
    
     for(let i=0;i<this.allAppUsers.length;i++)
     {
        let thisUser:AppUser = this.allAppUsers[i];
 
        if(thisUser.name == ipName && thisUser.password == ipPassword)
        {
 
           localStorage.setItem("name",ipName);
           localStorage.setItem("role",thisUser.role);
           localStorage.setItem("loginStatus",true+'');
           localStorage.setItem("photo",thisUser.photo);
           
           console.log("inside service for true ");
           
           return true; // note the break is not applicable in forEach because of window property
        }
 
     }
 
 
    
     return false;
     
   } //end of doLogin
 
   doUserLogout()
   {
     localStorage.removeItem('name')
     localStorage.removeItem('role')
     localStorage.removeItem('loginStatus')
     localStorage.removeItem('photo')
 
     console.log("inside Service logout ");
 
   }
 
 }
  

 
