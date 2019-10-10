import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/landing']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  async createUser(firstName, lastName, email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        this.addedUser(firstName, lastName, email, password);
        this.login(email, password);
      }
    ).catch(error => {
      console.log('error', error);
    });
  }

  addedUser(firstName, lastName, email, password) {
    const data = {
      email,
      first_name: firstName,
      last_name: lastName,
      password,
      role: 'user',
    };

    this.firestore.collection('users').add(data).then(res => console.log('res', res)).catch(err => console.log('errr', err));
  }

  findUser(email) {
    return this.firestore.collection('users', ref => ref.where('email', '==', email)).valueChanges();
  }

}

