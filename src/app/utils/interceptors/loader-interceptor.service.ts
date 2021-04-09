import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from '../services/loader.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor{
private totalRequests = 0;
  constructor(private loaderService:LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.showLoader();
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if(event instanceof HttpResponse){
        this.totalRequests--;
        if(this.totalRequests === 0){
          this.onEnd();
        }
      }

    },(err:any)=>{
      this.totalRequests--;
      if(this.totalRequests ===0){
        this.onEnd();
      }
    }));
   
  }

  private onEnd():void{
    this.hideLoader();
  }
  private showLoader():void{
    this.loaderService.show();
  }

  private hideLoader():void{
    this.loaderService.hide();
  }
}


