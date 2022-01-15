import { Component, OnInit } from '@angular/core';
import { CommonService } from '.././common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(formObj: any) {
    console.log(formObj);
    this.commonService.createUser(formObj).subscribe((Response) => {
      if(formObj.retype_pass == formObj.pass)
      {
      alert(`Signup Successful`);
      console.log("User has been added");
      this.router.navigate(['']);
      }

      else
      {
        alert("Please check the entered details");
      }
    });
  }

}
