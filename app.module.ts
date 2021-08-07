import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentComponent } from './student/student.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
