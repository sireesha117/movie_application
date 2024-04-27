import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TicketComponent } from './ticket/ticket.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { guardGuard } from './guard.guard';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DisplayallticketsComponent } from './displayalltickets/displayalltickets.component';
import { PreventLoginGuard } from './prevent-login.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent,canActivate: [PreventLoginGuard]},
  { path: 'allusers', component: GetallusersComponent },
  { path: 'addmovie', component: AddmovieComponent },
  { path: 'displayalltickets', component: DisplayallticketsComponent },
  { path: 'home', component: HomeComponent, canActivate: [guardGuard] },
  { path: 'register', component: RegisterComponent,canActivate: [PreventLoginGuard] },
  { path: 'ticket/:id', component: TicketComponent, canActivate: [guardGuard] },
  { path: 'forgotpassword', component: ForgotpasswordComponent ,canActivate: [PreventLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
