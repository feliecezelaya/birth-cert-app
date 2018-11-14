import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UploadComponent } from "../../upload/upload.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-application",
  templateUrl: "./new-application.component.html",
  styleUrls: ["./new-application.component.css"]
})
export class NewApplicationComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.email],
      phone: ["", Validators.required],
      birthPlace: ["", Validators.required],
      birthDistrict: ["", Validators.required],
      birthDate: ["", Validators.required],
      registrationDate: ["", Validators.required],
      age: ["", Validators.required],
      momFirstName: ["", Validators.required],
      momLastName: ["", Validators.required],
      momMaidenName: ["", Validators.required],
      momBirthCountry: ["", Validators.required],
      momBirthDate: ["", Validators.required],
      momIdType: ["", Validators.required],
      momIdNumber: ["", Validators.required],
      dadFirstName: ["", Validators.required],
      dadLastName: ["", Validators.required],
      dadBirthCountry: ["", Validators.required],
      dadBirthDate: ["", Validators.required],
      dadIdType: ["", Validators.required],
      dadIdNumber: ["", Validators.required],
      appFirstName: ["", Validators.required],
      appLastName: ["", Validators.required],
      appAddressLn1: ["", Validators.required],
      appAddressLn2: ["", Validators.required],
      appCity: ["", Validators.required],
      appDistrict: ["", Validators.required],
      appCountry: ["", Validators.required],
      appIdType: ["", Validators.required],
      appIdNumber: ["", Validators.required],
      appRelation: ["", Validators.required],
      appPurpose: ["", Validators.required],
      appDate: ["", Validators.required],
      delFirstName: ["", Validators.required],
      delLastName: ["", Validators.required],
      delIdType: ["", Validators.required],
      delIdNumber: ["", Validators.required],
      delTelephone: ["", Validators.required],
      delDateReceived: ["", Validators.required],
      pickupDate: [""],
      pickupTime: [""]
    });
  }

  callRoute(routeName: string) {
    this.router.navigate([routeName]);
  }
}
