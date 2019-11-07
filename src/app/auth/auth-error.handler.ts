import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

const ErrorMap = new Map([
    ['EMAIL_EXISTS', 'Got damn, this user exists'],
    ['OPERATION_NOT_ALLOWED', 'What R U trying to do? Its not accurred'],
    ['TOO_MANY_ATTEMPTS_TRY_LATER', 'Toooooo many attempts, try again later'],
    ['EMAIL_NOT_FOUND', 'Emmm we dont find such email....WHO R U?'],
    ['INVALID_PASSWORD', 'EM...u got invalid password =('],
    ['USER_DISABLED', 'Whoops... You are disabled']
  ]
);

const AuthErrorsHandler = (errorRes: HttpErrorResponse) => {
  const {error: {error: {message = ''} = {}} = {}} = errorRes;

  const cachedError = 'An error occurred!';

  if (ErrorMap.has(message)) {
    return throwError(ErrorMap.get(message));
  }
  return throwError(cachedError);
};
export default AuthErrorsHandler;
