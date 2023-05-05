import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import {CourseGuardService} from './course.service';
import {TamilComponent} from './tamil/tamil.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  
  {path:'course',component:CourseComponent},
  {path:'course',canActivate:[CourseGuardService],children:[
    {path:'course/tamil',component:TamilComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
