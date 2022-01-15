import { Component, OnInit } from '@angular/core';
import { CommonService } from '.././common.service';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GlobalConstants } from '../common/globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private commonService: CommonService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  userLogin(myForm: any)
  {
    this.http.get<any>('http://localhost:3000/users').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email == myForm.email && a.pass == myForm.pass
      });
      if(user)
      {
        GlobalConstants.toggle();
        this.router.navigate(['dashboard']);
      }

      else
      {
        alert("Login Failed! Please enter the correct details");
      }
    })
  }

}
