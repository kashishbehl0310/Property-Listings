import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title: String;
  city: String;
  owner: String;
  bedrooms: number;
  price: String;
  type: String;
  description: any;

  constructor(private firebaseservice: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit calles");
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedroomms: this.bedrooms,
      price: this.price,
      type: this.type,
      description: this.description
    }
    this.firebaseservice.addListing(listing);
  }

}
