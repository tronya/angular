import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export class AppHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const paramReq = req.clone({
      params: req.params.set(
        'api_key',
        environment.TheMovieDBKey
      )
    });
    return next.handle(paramReq);
  }
}
