import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../app/providers/login.service";
import { UtilService } from "../app/providers/util.service";

import { UserLogged } from "../app/models/user.interface";
import { environment } from "../environments/environment";
import { MatDrawer, MatDrawerContent } from "@angular/material";

import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  // @ViewChild(MatDrawer)
  // theDrawer: MatDrawer;

  title = environment.applicationName;
  companyLogo = environment.companyLogo;
  displayMenu = false;
  userInfo: UserLogged = <null>{};
  copyrightYear: string = moment().format("YYYY");

  // Define the structure for menu on top of the application page
  buttonMenus: Array<{
    btnTitle: string;
    btnIcon: string;
    btnUrlPath: any;
    roles?: string;
  }>;

  // Define the structure for left sidebar navigation menu
  leftMenu: Array<{
    group: string;
    title: string;
    urlPath: any;
    icon?: string;
    color?: string;
    roles?: string;
  }>;
  leftGroups: Array<{
    name: string;
    icon?: string;
    color?: string;
    roles?: string;
  }>;

  constructor(
    public loginService: LoginService,
    private utilService: UtilService,
    public router: Router
  ) {}

  ngOnInit() {
    // We do this check in case the user hit the refresh button in the browser
    if (this.loginService.isLogged) {
      this.displayMenu = true;
      this.userInfo = this.loginService.user;
    } else {
      // this.displayMenu = false;
      // this.userInfo = <null>{};
    }

    // Here we define the groups that will be used for the panel-headers
    this.leftGroups = [
      { name: "Home", icon: "", color: "", roles: "*" },
      {
        name: "Application",
        icon: "",
        color: "accent",
        roles: "*"
      }
    ];

    // This buttons will be rendered on top of the page
    this.leftMenu = [
      {
        group: "Home",
        title: "Home ",
        urlPath: "/main",
        roles: "*"
      },
      {
        group: "Application",
        title: "New Application ",
        urlPath: "/application/new",
        roles: "*"
      },
      {
        group: "Application",
        title: "Application History",
        urlPath: "/history",
        roles: "*"
      }
    ];

    this.loginService.onLogin$.subscribe(data => {
      this.displayMenu = true;
      this.userInfo = data;
    });

    this.loginService.onLogOut$.subscribe(data => {
      this.displayMenu = false;
    });
  }

  ngOnDestroy() {
    this.loginService.onLogin$.unsubscribe();
    this.loginService.onLogOut$.unsubscribe();
  }

  logOut() {
    this.utilService
      .confirmationDialog("Are you sure you want to sign out?")
      .then(resp => {
        if (resp) {
          this.loginService.logOut();
          this.router.navigate(["/main"]);
        }
      });
  }

  isLogged(): boolean {
    return this.loginService.isLogged;
  }

  currentRole(): string {
    if (this.userInfo.role) {
      return this.userInfo.role;
    } else {
      return undefined;
    }
  }

  showByRole(arg: string): boolean {
    if (arg === "*" || arg === undefined || arg === null || arg === "") {
      return true;
    }

    let retVal = false;
    const roles = arg.split(",");
    roles.forEach(el => {
      if (el === this.userInfo.role) {
        retVal = true;
      }
    });

    return retVal;
  }

  goHome() {
    this.router.navigate(["/"]);
  }

  callRoute(routeName: string) {
    this.router.navigate([routeName]);
  }
}
