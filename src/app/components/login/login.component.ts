import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username:string = '';
	password:string = '';
	flag = false;
	//public user={'username':'','password':''};
	validUsers= [ 
	  {'username':'admin', 'password':'admin'},
	];  
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(username:string,password:string): void {
    for (var i in this.validUsers)
    if(username == this.validUsers[i].username && password == this.validUsers[i].password){
  
        this.router.navigate(['employees']);
        break;
  
      }
    else{this.flag = true;}
    
    }
  
}
