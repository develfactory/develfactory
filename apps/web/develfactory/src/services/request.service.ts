import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestService {

  private apiDomain: string;

  constructor(private _http: Http) {
    // TODO dynamic url
    this.apiDomain = "http://local.api.develfactory.net";
  }

  static convertObjectToParams(obj: Object): string {
    // TODO handle multi-level objects
    let p = [];
    for (let key in obj) {
      p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
  }

  get(url: string, params: Object = {}): Promise<any> {
    let str_params = "?" + RequestService.convertObjectToParams(params);
    let final_url = url;
    if (str_params.length != 1) {
      final_url += str_params;
    }
    return this._http.get(this.apiDomain + final_url).toPromise()
      .then(res => {
        try {
          return res.json();
        } catch (error) {
          return Promise.reject(error.message || error);
        }
      })
      .catch(error => Promise.reject(error.message || error));
  }

  post(url: string, data: Object = {}, params: Object = {}): Promise<any> {
    let str_params = "?" + RequestService.convertObjectToParams(params);
    let final_url = url;
    if (str_params.length != 1) {
      final_url += str_params;
    }
    let postData = RequestService.convertObjectToParams(data);
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    });

    let options = {
      headers: headers
    };

    return this._http.post(this.apiDomain + final_url, postData, options).toPromise()
      .then(res => {
        try {
          return res.json();
        } catch (error) {
          return Promise.reject(error.message || error);
        }
      })
      .catch(error => Promise.reject(error.message || error));
  }
}
