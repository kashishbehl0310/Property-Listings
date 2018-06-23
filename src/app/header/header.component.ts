import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  error: any;
  constructor(private af: AngularFireAuth, private authservice: AuthService, private router: Router,
              public flashmessage: FlashMessagesService) { }

  ngOnInit() {
  }
  login(){
    this.authservice.login()
      .then((user) => {
        if(user){
          this.router.navigate(['/listings']);
        }
      })
      .catch(() => {
        this.error = "Problem while authenticating";
        console.log(this.error);
      })
  }
  logout(){

    this.authservice.logout();
    this.router.navigate(['/']);
    this.flashmessage.show('You are logged out !', {cssClass: 'alert-success', timeout: 3000})
  }

}
