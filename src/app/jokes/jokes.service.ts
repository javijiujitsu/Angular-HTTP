import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class JokesService {

  constructor(private http: Http) { }

  getRandom() {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map((res) => res.json());
  }
}
