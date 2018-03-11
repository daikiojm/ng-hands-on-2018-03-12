import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Repository } from './../types/repository.type';

@Injectable()
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>('https://api.github.com/users/vsavkin/repos');
  }
}
