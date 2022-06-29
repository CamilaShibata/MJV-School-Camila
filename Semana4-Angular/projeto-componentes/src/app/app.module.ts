import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ConteudoPrincipalComponent } from './home/components/conteudo-principal/conteudo-principal.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BlueDirective } from './shared/directives/blue.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConteudoPrincipalComponent,
    FooterComponent,
    BlueDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
