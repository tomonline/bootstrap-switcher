import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { TableComponent } from './components/samples/table/table.component';
import { ColoursComponent } from './components/samples/colours/colours.component';
import { CardComponent } from './components/samples/card/card.component';
import { CreditsComponent } from './components/credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    TableComponent,
    ColoursComponent,
    CardComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }