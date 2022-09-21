import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import { NetworkConfigComponent } from './network-config/network-config.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '/network', component: NetworkConfigComponent}
    ])],
  declarations: [ HelloComponent ],
  bootstrap:    [ NetworkConfigComponent ]
})
export class AppModule { }
