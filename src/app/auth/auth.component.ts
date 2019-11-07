import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {email, password} = form.value;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      this.isLoading = true;
      authObs = this.authService.signIn(email, password);
    } else {
      this.isLoading = true;
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(resData => {
      this.isLoading = false;
      this.router.navigate(['./recipes']);
    }, error => {
      this.isLoading = false;
      this.error = error;
    });
  }
}
