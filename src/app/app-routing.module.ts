import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeComponent } from './addemploye/addemploye.component';
import { MainfileComponent } from './mainfile/mainfile.component';
import { SearchemployeComponent } from './searchemploye/searchemploye.component';
const routes: Routes = [
  {path: "", component:MainfileComponent,children:[
    {
      path:"addemp",component:AddemployeComponent,
    },
    {
      path:"searchemp",component:SearchemployeComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
