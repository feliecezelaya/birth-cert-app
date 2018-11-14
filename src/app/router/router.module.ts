import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { RouteGuardService } from "../providers/route-guard.service";
import { LoginComponent } from "../login/login.component";
import { MainComponent } from "../main/main.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { NewApplicationComponent } from "../application/new-application/new-application.component";
import{UploadComponent} from "../upload/upload.component";

const myRoutes: Routes = [
  { path: "auth", component: LoginComponent },
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  {
    path: "main",
    component: MainComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "application/new",
    component: NewApplicationComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "upload",
    component: UploadComponent,
    canActivate: [RouteGuardService]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule {}
