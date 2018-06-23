import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error: any;
  constructor(private authservice: AuthService, private router: Router) { }

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
}
