import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GithubApiService } from './services/github-api.service';
import { Repository } from './types/repository.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  repos$: Observable<Repository[]>;

  constructor(private githubApiService: GithubApiService) {}

  ngOnInit() {
    this.repos$ = this.githubApiService.getRepos();
  }
}
