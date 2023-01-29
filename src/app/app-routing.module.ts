import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'reactive', component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
