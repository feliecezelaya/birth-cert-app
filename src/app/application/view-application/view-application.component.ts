import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-view-application",
  templateUrl: "./view-application.component.html",
  styleUrls: ["./view-application.component.css"]
})
export class ViewApplicationComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  paramsSubscription: Subscription;
  currentAppRef: string;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(data => {
      this.currentAppRef = data["ref"];
    });

    switch (this.currentAppRef) {
      case "SDKJVHF9876003":
        this.firstFormGroup = this._formBuilder.group({
          reference: ["SDKJVHF9876003"],
          firstName: ["John"],
          lastName: ["Doe"],
          email: ["johndoe@gmail.com"],
          phone: ["501-610-1234"],
          birthPlace: ["KHMH"],
          birthDistrict: ["Belize"],
          birthDate: ["1999-10-01"],
          registrationDate: ["1999-10-02"],
          age: [19],
          momFirstName: ["Paulette"],
          momLastName: ["Doe"],
          momMaidenName: [""],
          momBirthCountry: ["Belize"],
          momBirthDate: ["1880-03-06"],
          momIdType: ["Social Security"],
          momIdNumber: ["360000234"],
          dadFirstName: ["Jerry"],
          dadLastName: ["Doe"],
          dadBirthCountry: ["Belize"],
          dadBirthDate: ["1878-05-12"],
          dadIdType: ["Passport"],
          dadIdNumber: ["P123456"],
          appFirstName: ["Jenny"],
          appLastName: ["Doe"],
          appAddressLn1: ["123"],
          appAddressLn2: ["Bird Lane"],
          appCity: ["Belize City"],
          appDistrict: ["Belize"],
          appCountry: ["Belize"],
          appIdType: ["SocialSecurity"],
          appIdNumber: ["380360320"],
          appRelation: ["Cousin"],
          appPurpose: ["Travel Abroad"],
          appDate: ["2018-11-10"],
          delFirstName: ["Jeffery"],
          delLastName: ["Doe"],
          delIdType: ["Passport"],
          delIdNumber: ["360000234"],
          delTelephone: ["501-610-1234"],
          delDateReceived: ["2018-11-12"],
          pickupDate: ["2018-11-12"],
          pickupTime: ["13:30:00"],
          applicationStatus: ["Submitted"]
        });
        break;
      case "SDKJVHF9876002":
        this.firstFormGroup = this._formBuilder.group({
          reference: ["SDKJVHF9876002"],
          firstName: ["Kim"],
          lastName: ["Peters"],
          email: ["kimpeters@gmail.com"],
          phone: ["501-610-1234"],
          birthPlace: ["KHMH"],
          birthDistrict: ["Belize"],
          birthDate: ["1999-10-01"],
          registrationDate: ["1999-10-02"],
          age: [19],
          momFirstName: ["Paulette"],
          momLastName: ["Doe"],
          momMaidenName: [""],
          momBirthCountry: ["Belize"],
          momBirthDate: ["1880-03-06"],
          momIdType: ["Social Security"],
          momIdNumber: ["360000234"],
          dadFirstName: ["Jerry"],
          dadLastName: ["Doe"],
          dadBirthCountry: ["Belize"],
          dadBirthDate: ["1878-05-12"],
          dadIdType: ["Passport"],
          dadIdNumber: ["P123456"],
          appFirstName: ["Jenny"],
          appLastName: ["Doe"],
          appAddressLn1: ["123"],
          appAddressLn2: ["Bird Lane"],
          appCity: ["Belize City"],
          appDistrict: ["Belize"],
          appCountry: ["Belize"],
          appIdType: ["SocialSecurity"],
          appIdNumber: ["380360320"],
          appRelation: ["Cousin"],
          appPurpose: ["Travel Abroad"],
          appDate: ["2018-11-10"],
          delFirstName: ["Jeffery"],
          delLastName: ["Doe"],
          delIdType: ["Passport"],
          delIdNumber: ["360000234"],
          delTelephone: ["501-610-1234"],
          delDateReceived: ["2018-11-12"],
          pickupDate: ["2018-11-12"],
          pickupTime: ["13:30:00"],
          applicationStatus: ["Submitted"]
        });
        break;
      case "SDKJVHF9876001":
        this.firstFormGroup = this._formBuilder.group({
          reference: ["SDKJVHF9876001"],
          firstName: ["Sam"],
          lastName: ["Doe"],
          email: ["samdoe@gmail.com"],
          phone: ["501-610-1234"],
          birthPlace: ["KHMH"],
          birthDistrict: ["Belize"],
          birthDate: ["1999-10-01"],
          registrationDate: ["1999-10-02"],
          age: [19],
          momFirstName: ["Paulette"],
          momLastName: ["Doe"],
          momMaidenName: [""],
          momBirthCountry: ["Belize"],
          momBirthDate: ["1880-03-06"],
          momIdType: ["Social Security"],
          momIdNumber: ["360000234"],
          dadFirstName: ["Jerry"],
          dadLastName: ["Doe"],
          dadBirthCountry: ["Belize"],
          dadBirthDate: ["1878-05-12"],
          dadIdType: ["Passport"],
          dadIdNumber: ["P123456"],
          appFirstName: ["Jenny"],
          appLastName: ["Doe"],
          appAddressLn1: ["123"],
          appAddressLn2: ["Bird Lane"],
          appCity: ["Belize City"],
          appDistrict: ["Belize"],
          appCountry: ["Belize"],
          appIdType: ["SocialSecurity"],
          appIdNumber: ["380360320"],
          appRelation: ["Cousin"],
          appPurpose: ["Travel Abroad"],
          appDate: ["2018-11-10"],
          delFirstName: ["Jeffery"],
          delLastName: ["Doe"],
          delIdType: ["Passport"],
          delIdNumber: ["360000234"],
          delTelephone: ["501-610-1234"],
          delDateReceived: ["2018-11-12"],
          pickupDate: ["2018-11-12"],
          pickupTime: ["13:30:00"],
          applicationStatus: ["Submitted"]
        });
        break;
    }
    this.firstFormGroup.disable();
  }

  callRoute(routeName: string) {
    this.router.navigate([routeName]);
  }
}
