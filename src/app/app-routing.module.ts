import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Sections/Home/home.component';
import { MeteoComponent } from './Sections/Meteo/meteo.component';
import { NotFoundComponent } from './Sections/NotFound/notFound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'meteo', component: MeteoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
