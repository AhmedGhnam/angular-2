import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
