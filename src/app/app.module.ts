import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalService } from './goal.service'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GoalsComponent,
    GoalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GoalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
