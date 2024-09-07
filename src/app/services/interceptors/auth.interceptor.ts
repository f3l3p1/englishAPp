import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token del localStorage
    const authToken = localStorage.getItem('token');

    // Si existe un token, clonamos la solicitud y le añadimos el encabezado Authorization
    const authReq = authToken ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    }) : req;

    // Continuar con la solicitud clonada o la solicitud original si no hay token
    return next.handle(authReq);
  }
}
