import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import AuthErrorsHandler from './auth-error.handler';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from './user.model';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseApiKey,
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(
      catchError(AuthErrorsHandler),
      tap(res => this.handleAuthentication(res.email, res.localId, res.idToken, res.expiresIn))
    );
  }

  private handleAuthentication(email: string, id: string, token: string, expiration: string) {
    const expirationDate: Date = new Date(new Date().getTime() + +expiration * 1000);
    const user = new UserModel(email, id, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));

    const expirationTime = expirationDate.getTime() * 1000;
    console.log(expirationTime);
    // this.autoLogOut(expirationTime);

  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseApiKey,
      {
        email,
        password,
        returnSecureToken: true
      }
    )
      .pipe(catchError(AuthErrorsHandler));
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData')) || {};

    const loggedUser: UserModel = new UserModel(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    if (!loggedUser.token) {
      this.logOut();
      return;
    } else {
      this.user.next(loggedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();

      this.autoLogOut(expirationDuration);
    }
  }

  autoLogOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => this.logOut(), expirationDuration);
  }

  logOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.setItem('userData', null);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
}
