import { Component, OnInit } from "@angular/core";
import { ApplicationHistory } from "../../../assets/mockup/applicationHistory";

@Component({
  selector: "app-hist-application",
  templateUrl: "./hist-application.component.html",
  styleUrls: ["./hist-application.component.css"]
})
export class HistApplicationComponent implements OnInit {
  appHist = ApplicationHistory;

  constructor() {}

  ngOnInit() {}

  getStatusIcon(appStatus: string): string {
    let statusIcon: string;
    switch (appStatus) {
      case "Submitted":
        statusIcon = "donut_large";
        break;
      case "Approved":
        statusIcon = "done";
        break;
    }
    return statusIcon;
  }

  getStatusColor(appStatus: string): string {
    let statusColor: string;
    switch (appStatus) {
      case "Submitted":
        statusColor = "orange";
        break;
      case "Approved":
        statusColor = "green";
        break;
    }
    return statusColor;
  }
}
