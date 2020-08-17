import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getBeer (){
    return this._http.get('https://api.openbrewerydb.org/breweries')
  }

  doAuth (token){
    //console.log('https://localhost:44328/api/Status', { headers: this.getAPIHeaders(token) });
    //return this._http.get('https://localhost:44328/api/Status', { headers: this.getAPIHeaders(token) })

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Access-Control-Allow-Origin':'*'
    });
    // const headers = new HttpHeaders({
    //   Content-Type: 'application/json'
    // .set('Accept', 'application/json')
    // .set('Access-Control-Allow-Headers', 'Content-Type')

    // });
    //let params = new URLSearchParams();
    //params.append("Authorization", 'Bearer ' + token)
    
    

    return this._http.get('https://localhost:44328/api/Status', { headers: httpHeaders })
  }

  getAPIHeaders(token) {
    let headers = {
        Authorization: 'Bearer ' + token
    };
    return headers;
  }
}
