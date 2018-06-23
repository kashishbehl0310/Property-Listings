import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule}  from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { AppRouter } from './app-router.module';
import { FirebaseService } from './services/firebase.service';
import { AuthService } from './services/auth.service';

export const FirebaseConfig = {
  apiKey: "AIzaSyAMD49K7Gv6KVp62_3cWExF-RwdKZ-Gpdo",
  authDomain: "property-listing-a2e6b.firebaseapp.com",
  databaseURL: "https://property-listing-a2e6b.firebaseio.com",
  projectId: "property-listing-a2e6b",
  storageBucket: "property-listing-a2e6b.appspot.com",
  messagingSenderId: "785454642148"
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    HeaderComponent,
    ListItemComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    AngularFireModule.initializeApp(FirebaseConfig),
    FlashMessagesModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    FirebaseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
