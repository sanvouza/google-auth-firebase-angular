import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config = {
  apiKey: 'AIzaSyBW4rTy21G0Mk-EIhuLPfmibxdHLGWMLiw',
  authDomain: 'auth-firebase-angular-12dde.firebaseapp.com',
  databaseURL: 'https://auth-firebase-angular-12dde.firebaseio.com',
  projectId: 'auth-firebase-angular-12dde',
  storageBucket: 'auth-firebase-angular-12dde.appspot.com',
  messagingSenderId: '373777631230',
  appId: '1:373777631230:web:2281fa2374a184e678e2af'
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
