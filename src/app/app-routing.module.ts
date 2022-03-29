import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { NotFoundComponent } from './NotFound/notFound.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
