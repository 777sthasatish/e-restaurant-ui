import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RouteConstant } from '../../../shared/constant/route-constant';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.handleError(error);
          return throwError(error);
        })
      );
  }

  handleError(error: HttpErrorResponse): void {
    switch (error.status) {
      case 401:
        this.handle401Error();
        break;
      case 409:
        this.toastr.error(error.error.message, error.error.status);
      case 400:
        this.toastr.error(error.error.message, error.error.status);
        break;
    }
  }

  handle401Error() {
    localStorage.clear();
    this.router.navigate([RouteConstant.login]);
  }
}
