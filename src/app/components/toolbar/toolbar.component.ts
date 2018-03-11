import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() search = new EventEmitter<string>();

  title = 'gh-client';
  searchWord: string;

  onClickSearch() {
    if (this.searchWord) {
      this.search.emit(this.searchWord);
    }
  }
}
