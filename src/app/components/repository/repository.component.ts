import { Component, OnInit, Input } from '@angular/core';

import { Repository } from './../../types/repository.type';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @Input() repo: Repository;

  constructor() { }

  ngOnInit() {
  }

}
