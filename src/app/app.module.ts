import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { SharingService } from './services/sharing.service';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TemplateDrivenComponent,
    ReceiverComponent,
    ReactiveFormComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
