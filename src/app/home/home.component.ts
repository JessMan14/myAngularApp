import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    var match = (window.location.hash) ? window.location.hash.match(/#access_token=([^&]+)/) : false;

    console.log("match[1] = " + match[1]);
    if (match[1]) {
      console.log("Found token");
      this.router.navigate(['/list']);
    } else {
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
