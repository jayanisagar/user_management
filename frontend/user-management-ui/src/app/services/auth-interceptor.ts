import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Constants } from '../constants';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const customReq = request.clone({
            headers: this.getHeadersWithAuthToken()
        });
        return next.handle(customReq);
    }

    getHeadersWithAuthToken(): HttpHeaders {
        return new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Authorization': this.getToken()
            });
    }

    getToken(): any {
        let token = localStorage.getItem(Constants.accessToken);

        if (token == null) {
            token = "";
        }
        return token;
    }
}