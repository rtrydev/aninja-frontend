import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable } from "rxjs";
import { UserService } from "../services/user.service";
import {take} from "rxjs/operators"

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private userService: UserService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.userService.currentUser.pipe(
            take(1),
            exhaustMap(user => {
                if(!user) next.handle(req);

                const modifiedReq = req.clone({headers: new HttpHeaders().set('Authorization', 'Bearer ' + user?.token)});
                return next.handle(modifiedReq);
            })
        )
    }
}