export class User {
   userName : string ;
    lastName : string ;
    password : string ;
    phoneNumber : number;
    gender : string;
    emailId : string;
    userRole : string;

    constructor(
        
      userName : string,
        lastName : string,
        password : string,
        phoneNumber : number,
        gender : string,
        emailId : string,
        userRole : string,

     )

     {
        this.userName = userName;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.emailId = emailId;
        this.userRole = userRole;

     }

}

    export class UserLoginDTO {

      userName : string ;
        lastName : string ;
        password : string ;
        phoneNumber : number;
        userId : number;
        emailId : string;
        userRole : string;
    
        constructor(
            
         userName : string,
            lastName : string,
            password : string,
            phoneNumber : number,
            userId : number,
            emailId : string,
            userRole : string,
             
         )
    
         {
            this.userName = userName;
            this.lastName = lastName;
            this.password = password;
            this.phoneNumber = phoneNumber;
            this.userId = userId;
            this.emailId = emailId;
            this.userRole = userRole;
         }
    




}
