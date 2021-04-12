import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceService } from '../utils/services/space.service';

@Component({
  selector: 'app-launch-program',
  templateUrl: './launch-program.component.html',
  styleUrls: ['./launch-program.component.scss']
})
export class LaunchProgramComponent implements OnInit {
years = []
lauchesSpaces = []
filterParams = {
  limit:100,
  launch_success:'',
  land_success:'',
  launch_year:''
}
isSubmit = false;
  constructor(private titleService: Title,private route: ActivatedRoute,private router:Router,private spaceService:SpaceService,private metaTagService: Meta) {
   
    let currentYear = new Date().getFullYear();
    for(let i = 2006;i<currentYear;i++){
      this.years.push(i);
    }
   }
   
  ngOnInit(): void {
    this.titleService.setTitle("SpaceX Launch"); //For SEO
    this.metaTagService.updateTag({name: 'description', content: "SpaceX Launch Programs"});
    if(Object.keys(this.route.snapshot.queryParams).length){
      let currentParam = this.route.snapshot.queryParams; //getting query params
      Object.keys(currentParam).forEach((key)=>{
      if(this.filterParams[key] != currentParam[key]){
        this.filterParams[key] = currentParam[key]
      }
      });
    }else{
      this.changeQueryParam({limit: this.filterParams.limit});
    }
    this.lauchesSpaces=this.route.snapshot.data['lauchesSpaces'];
  }

  getLauches(){
    this.spaceService.getLaunchesData(this.filterParams).subscribe(data =>{
      this.isSubmit = true
      this.lauchesSpaces = data;
      this.lauchesSpaces.forEach(val =>{
        if(val.launch_success == true){
          val.launch_success = 'Yes';
        }else if(val.launch_success == false){
          val.launch_success = 'No';
        }
        if(val.launch_landing == true){
          val.launch_landing = 'Yes';
        }else if(val.launch_landing == false){
          val.launch_landing = 'No';
        }
      })
    },error => {
      this.lauchesSpaces = [];
    })
  }

  getLuanchByYear(event){
    if(event.target.localName == 'button'){
      if(this.filterParams.launch_year == event.target.value){
        this.filterParams.launch_year = '';
      }else{
        this.filterParams.launch_year = event.target.value;
      }
     this.changeQueryParam(this.filterParams);
     this.getLauches();
    }
  }

  changeQueryParam(param){
    this.router.navigate([''], { queryParams: param, queryParamsHandling :"merge"});
  }

  getLauchesByLaunchSuccess(event){
    if(event.target.localName == 'button'){
      if(this.filterParams.launch_success == event.target.value){
        this.filterParams.launch_success = '';
      }else{
        this.filterParams.launch_success = event.target.value;
      }
      this.changeQueryParam(this.filterParams);
      this.getLauches();
    }
  }

  getLauchesByLandSuccess(event){
    if(event.target.localName == 'button'){
      if(this.filterParams.land_success == event.target.value){
        this.filterParams.land_success = ''
      }else{
        this.filterParams.land_success = event.target.value;
      }
      this.changeQueryParam(this.filterParams);
      this.getLauches();
    }
  }


}
