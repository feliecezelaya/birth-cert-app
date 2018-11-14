import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./providers/http-interceptor.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { UtilService } from "./providers/util.service";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainComponent } from "./main/main.component";

//Angular Material Components
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRouterModule } from "./router/router.module";
import { FilterItPipe } from "./pipes/filter-it.pipe";
import { FilterRolePipe } from "./pipes/filter-role.pipe";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { SuccessDialogComponent } from "./success-dialog/success-dialog.component";
import { ErrorDialogComponent } from "./error-dialog/error-dialog.component";
<<<<<<< HEAD
import { NewApplicationComponent } from "./application/new-application/new-application.component";
=======
import { NewApplicationComponent } from './application/new-application/new-application.component';
import { UploadComponent } from './upload/upload.component';
>>>>>>> 9e59daf759dc2c112498f785e74e59e39a33499b

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    DashboardComponent,
    MainComponent,
    ConfirmationDialogComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    FilterItPipe,
    FilterRolePipe,
    NewApplicationComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
