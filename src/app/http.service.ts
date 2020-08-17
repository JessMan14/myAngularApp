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
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Access-Control-Allow-Origin':'*'
    });

    return this._http.get('https://localhost:44328/api/Status', { headers: httpHeaders })
  }

  getAPIHeaders(token) {
    let headers = {
        Authorization: 'Bearer ' + token
    };
    return headers;
  }
}
