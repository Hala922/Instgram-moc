import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SplashComponent } from './splash/splash.component';
import { ServicesComponent } from './services/services.component';
import { TableComponent } from './table/table.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SplashComponent,
    ServicesComponent,
    TableComponent,
    HelpComponent,
    MenuComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
