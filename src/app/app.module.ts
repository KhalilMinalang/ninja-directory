import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// REQUIRED
import {FormsModule} from '@angular/forms';
import { DirectoryComponent } from './directory/directory.component';

import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    FormsModule, // REQUIRED

    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
    // APP_ROUTES_PROVIDER,

  ]
})
export class AppModule { }
