import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './common/loader/not-found-page/not-found-page.component';
import { LaunchProgramComponent } from './launch-program/launch-program.component';
import { DataResolverService } from './utils/services/data-resolver.service';


const routes: Routes = [{path:'space-launch',component:LaunchProgramComponent,resolve:{
  lauchesSpaces:DataResolverService
}},
{
  path: "",
  redirectTo: "space-launch",
  pathMatch: "full"
},
{path:'**',component:NotFoundPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
