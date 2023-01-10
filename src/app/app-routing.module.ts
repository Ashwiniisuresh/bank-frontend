import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  // login
  {
    path:'',component:LoginComponent
  },
  {
    path:'view-register',component:RegisterComponent
  },
  {
    path:'deposit',component:DepositComponent
  },
  {
    path:'withdraw',component:WithdrawalComponent
  },
  {
    path:'dashboard',component:DashboardComponent

  },
  {
    path:'transaction',component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }