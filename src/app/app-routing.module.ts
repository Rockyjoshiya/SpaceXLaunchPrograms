import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './common/loader/not-found-page/not-found-page.component';
import { LaunchProgramComponent } from './launch-program/launch-program.component';


const routes: Routes = [{path:'',component:LaunchProgramComponent},
{path:'**',component:NotFoundPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
