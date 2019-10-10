import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LangingComponent } from './langing/langing.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AboutGuard } from './about.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material';

const config = {
  apiKey: 'AIzaSyAu5Vmih0wubAzvM5VsJJaVY-zFfBnlrvo',
  authDomain: 'angulartest-75e0c.firebaseapp.com',
  databaseURL: 'https://angulartest-75e0c.firebaseio.com',
  projectId: 'angulartest-75e0c',
  storageBucket: 'angulartest-75e0c.appspot.com',
  messagingSenderId: '737077467309',
  appId: '1:737077467309:web:c68045b56bcf9f8de74e24'
};

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    LoginComponent,
    LangingComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    appRoutes,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatButtonModule
  ],
  providers: [
    RouterModule,
    AboutGuard,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
