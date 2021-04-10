import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first,tap } from 'rxjs/operators';
import { SpaceService } from './space.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{
  private isPlatformServer=false;
  constructor( @Inject(PLATFORM_ID) platformId:string,
  private stateTransfer:TransferState,private spaceService:SpaceService) { 
    this.isPlatformServer=isPlatformServer(platformId) //To know where our code is running
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
    const KEY=makeStateKey<any>('lauchesSpaces');
   if(this.stateTransfer.hasKey(KEY)){
     //If already our data is available, we will use it
     const data=this.stateTransfer.get(KEY,[]);
     this.stateTransfer.remove(KEY); //Remove the data once we have used it
     return of(data);
   }else{
     let queryData = route.queryParams;
     if(!queryData){
      queryData = {'limit':'100'}
     }
    return this.spaceService.getLaunchesData(queryData).pipe(first(),tap(data =>{
      if(this.isPlatformServer)
      {
          //On server, we will set the data in Transfer State
          this.stateTransfer.set(KEY,data);
      }
    }))
   }
  }
}
