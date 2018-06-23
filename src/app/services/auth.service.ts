import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthService{

    user: Observable<firebase.User>;

    constructor(private af: AngularFireAuth){
        this.user = af.authState;
    }

    login(){
        return this.af.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    logout(){
        this.af.auth.signOut();
    }
    isAuthenticated(): boolean {
        return this.user !== null;
    }
    currentUser(): any {
        return this.isAuthenticated ? this.user : null;
    }
    
}