import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { UserAuth, UserLogged } from "../models/user.interface";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public user: UserLogged = <null>{};
  public isLogged = false;
  public onLogin$ = new Subject<UserLogged>();
  public onLogOut$ = new Subject<void>();

  constructor(public http: HttpClient) {}

  authenticateUser(user: UserAuth): Promise<UserLogged> {
    return new Promise((succ, reject) => {
      this.http
        .get<UserLogged>("./assets/mockup/successfulLogin.json")
        .toPromise()
        .then(data => {
          if (data.status === 0) {
            this.user = data;
            // Assign it from the local parameter as it does not come in the response
            this.user.username = user.username;
            // Make it logged
            this.isLogged = true;
            // Emit a new onLogin$ event with the user Object
            this.onLogin$.next(this.user);
            succ(this.user);
          } else {
            reject(data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  logOut() {
    // turnOff and clean some local userobject properties
    this.isLogged = false;
    this.user = <null>{};

    // emit the logout event with a void vaue, no need to send any info
    this.onLogOut$.next();
  }
}
