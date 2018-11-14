import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { RouteGuardService } from "../providers/route-guard.service";
import { AppComponent } from "../app.component";
import { LoginComponent } from "../login/login.component";
import { MainComponent } from "../main/main.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { NewApplicationComponent } from "../application/new-application/new-application.component";
import { UploadComponent } from "../upload/upload.component";
import { HistApplicationComponent } from "../application/hist-application/hist-application.component";
import { ViewApplicationComponent } from "../application/view-application/view-application.component";

const myRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "main", component: MainComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "application/new",
    component: NewApplicationComponent
  },
  {
    path: "application/history",
    component: HistApplicationComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "application/view/:ref",
    component: ViewApplicationComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "upload",
    component: UploadComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(myRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule {}
