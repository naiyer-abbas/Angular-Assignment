import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
import {GlobalConstants} from './common/globals'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  val = GlobalConstants.is_logged;
  title = 'My_Website';
  constructor(private router: Router) { }
  goTopage(page: string):void{
    this.router.navigate([`${page}`]);
  }
}




