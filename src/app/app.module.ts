import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GithubApiService } from './services/github-api.service';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RepositoryComponent } from './components/repository/repository.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
