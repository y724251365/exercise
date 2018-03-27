import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {RouterModule, Routes} from '@angular/router';

const routeConfig: Routes = [
  {path: '', component: AppComponent},
  {path: '/:name,id', component: HeroesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

