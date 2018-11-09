import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

import { LoginService } from "../providers/login.service";

import { UserAuth } from "../models/user.interface";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements AfterViewInit {
  @ViewChild("username")
  userNameField: ElementRef<HTMLInputElement>;

  public loginForm: FormGroup;
  private user: UserAuth = <null>{};
  public hide = true;

  constructor(
    private route: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngAfterViewInit() {
    this.userNameField.nativeElement.focus();
  }

  authenticate() {
    this.user.username = this.loginForm.get("userName").value;
    this.user.password = this.loginForm.get("password").value;
    this.user.group = environment.applicationGroupIdentifier;

    this.loginService
      .authenticateUser(this.user)
      .then(resp => {
        // navigate to main component
        this.route.navigate(["/main"]);
      })
      .catch(err => {
        console.log("Error", err);
        this.snackBar.open(err, "OK", {
          duration: 2500,
          panelClass: "todos-notification-overlay"
        });
      });
  }
}
