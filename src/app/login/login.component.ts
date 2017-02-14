import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl:String;
  error:boolean;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }
 
    ngOnInit() {
        // reset login status
        localStorage.removeItem('user');

        this.error = false;
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/';
    }

    login(username:String, password:String){
      if (username === 'user' && password === 'pass'){
        localStorage.setItem('user', 'user');
        this.router.navigate([this.returnUrl]);
      }else{
        this.error = true;
      }
    }

}
