import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id;
  title;
  city;
  bedrooms;
  owner;
  price;
  type;
  constructor(private firebaseservice: FirebaseService, private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseservice.getListingDetail(this.id).subscribe((listing) => {
      console.log(listing);
      this.title = listing.title;
      this.city = listing.city;
      this.price = listing.price;
      this.owner = listing.owner;
      
      this.type = listing.type;
      this.bedrooms = listing.bedroomms;
    })
  }

  onSubmit(){
    let listing= {
      title: this.title,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price,
      city: this.city,
      type: this.type
    }
    this.firebaseservice.updateListing(this.id, listing);
    this.router.navigate(['/listings']);
  }

}
