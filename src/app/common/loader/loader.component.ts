import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService, LoaderState } from 'src/app/utils/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
show:boolean = false;
private subscription:Subscription
  constructor(private loaderService:LoaderService) { 
    this.subscription = this.loaderService.loaderState.subscribe((state:LoaderState)=>{
      this.show = state.show;
    })
  }

  ngOnInit(): void {
  }

}
