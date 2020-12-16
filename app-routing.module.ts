import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UserLogComponent } from './user-log/user-log.component';

const routes:Routes=[


{path:'',redirectTo:'/user-log', pathMatch:'full'},
{path:'user-log', component:UserLogComponent},
{path:'search', component:SearchComponent },



] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }

