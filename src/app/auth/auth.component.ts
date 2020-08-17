import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private _http: HttpService) { }

  ngOnInit(): void {
    var match = (window.location.hash) ? window.location.hash.match(/#access_token=([^&]+)/) : false;

    console.log("match[1] = " + match[1]);
    if (match[1]) {
      console.log("Found token");
      sessionStorage.setItem('token', match[1]);

      this._http.doAuth(match[1]).subscribe(data => {
        console.log(data);
      });

      this.router.navigate(['/home']);
    } else {
      window.location.href = "http://localhost:4200/";
    }    
  }

}
