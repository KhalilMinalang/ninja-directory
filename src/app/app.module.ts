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

import { HttpClientModule } from '@angular/common/http';

//
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireDatabase  } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
;

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

    // AngularFireModule.initializeApp(environment.firebase),

    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
    // APP_ROUTES_PROVIDER,

  ]
})
export class AppModule { }
