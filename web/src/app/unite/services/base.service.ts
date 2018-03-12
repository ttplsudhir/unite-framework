import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import * as config from 'assets/config.json';


@Injectable()
export class BaseService {

  constructor(private _httpClient: HttpClient) { 

  }

  get(url) {
    console.log("config", config['server']['host']);
    return this._httpClient.get(config['server']['host'] + url);
  }

  post() {
  
  }

  update() {

  }

  delete() {

  }
}
