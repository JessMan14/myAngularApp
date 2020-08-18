import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';
  
  constructor(private router: Router, private _http: HttpService) { }

  ngOnInit(): void {
    let value = sessionStorage.getItem('token');
    if (value) {
      console.log("found token in storage");
    } else {
      console.log("No found token in storage");
      window.location.href = "http://localhost:4200/";
    }
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses () {
    let myClasses = {
      active: this.clickCounter > 4, 
      notactive: this.clickCounter <= 4, 
    }
    return myClasses;
  }

}
