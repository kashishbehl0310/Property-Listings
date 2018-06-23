import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Listings } from '../models/listing.model';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: AngularFireList<Listings []>;
  listingRef: AngularFireObject<any []>;
  sigleListing: Observable<any>;
  listing: Observable<any []>;
  folder: any;

  constructor(private db: AngularFireDatabase) { 
    this.folder = 'listingImages';
    this.listings = db.list('listings');
    this.listing = this.listings.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      )
    );
  }

  getListings(){
    return this.listing;
  }

  getListingDetail(id){
    this.listingRef = this.db.object('listings/'+id);
    this.sigleListing = this.listingRef.valueChanges();
    return this.sigleListing;
  }

  addListing(listing){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile)
        .then((snapshot) => {
          listing.image = selectedFile.name;
          listing.path = path;
          this.listings = this.db.list('listings');
          return this.listings.push(listing);
        })
    }
  }
  updateListing(id, listing){
    return this.listings.update(id, listing);
  }
  deleteListing(id){
    return this.listings.remove(id);
  }
}
