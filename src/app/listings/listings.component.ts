import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Listings } from '../models/listing.model';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings: Listings[];
  imgUrl: any;
  constructor(private firebaseservice: FirebaseService, private router: Router, private angularfirestorage: AngularFireStorage) { }

  ngOnInit() {
    this.firebaseservice.getListings().subscribe(listings => {
      this.listings = listings;
      console.log(this.listings);
      this.listings.forEach(element => {
        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child(element.path);
        console.log("path is "+ element.path);
        storageRef.child(element.path).getDownloadURL()
          .then((url)=> {
            this.imgUrl = url;
            console.log(this.imgUrl);
          })
          .catch((err) => {
            console.log("An error occured" + err );
          })
      })
      // let storageRef = firebase.storage().ref();
      // let spaceRef = storageRef.child(listings.path);
      // console.log("path is " + listings.path);
      // storageRef.child(listings.path).getDownloadURL()
      //   .then((url) => {
      //     this.imgUrl = url;
      //   })
      //   .catch((err)=>{
      //     console.log(err);
      //   })
      // console.log(this.listings);
    })
  }
  onAddPost(){
    this.router.navigate(['/add-listings']);
  }

}
