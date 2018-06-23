import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import 'rxjs';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  id: any;
  listing: any;
  imageUrl: any;
  constructor(private firebaseservice: FirebaseService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.params['id'];
    console.log(this.id);
    this.firebaseservice.getListingDetail(this.id).subscribe(listing => {
      this.listing = listing;
      console.log(this.listing);
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(listing.path);
      // console.log(listing.path);
      storageRef.child(listing.path).getDownloadURL()
        .then((url) => {
          this.imageUrl = url;
        })
        .catch((err)=>{
          console.log(err);
        })
        // console.log(this.imageUrl);
    })
  }

  deleteListing(){
    this.firebaseservice.deleteListing(this.id);
    this.router.navigate(['/listings']);
  }

}
