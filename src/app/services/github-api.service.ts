import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Repository } from './../types/repository.type';
import { SearchRepositories } from './../types/search-repositories.type';

@Injectable()
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>('https://api.github.com/users/vsavkin/repos');
  }

  searchRepos(word: string): Observable<Repository[]> {
    return this.http.get<SearchRepositories>(`https://api.github.com/search/repositories?q=${word}`)
      .pipe(map(res => res.items));
  }
}
