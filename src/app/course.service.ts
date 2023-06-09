import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable()
export class CourseGuardService implements CanActivate,CanActivateChild{
    constructor(private authservice:AuthService,private router :Router){}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authservice.IsAthenticated()){
            return true;
        }
        else{
            this.router.navigate(['']);
            return false;
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        return this.canActivateChild(childRoute,state);
    }
    }
    
