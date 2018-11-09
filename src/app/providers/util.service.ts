import { ErrorDialogComponent } from "./../error-dialog/error-dialog.component";
import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { SuccessDialogComponent } from "../success-dialog/success-dialog.component";

@Injectable({
  providedIn: "root"
})
export class UtilService {
  constructor(private dialog: MatDialog) {}

  confirmationDialog(title: string): Promise<boolean> {
    return new Promise(succ => {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: { title: title }
      });

      dialogRef.afterClosed().subscribe(result => {
        succ(result); // true or false
      });
    });
  }

  errorDialog(title: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: { title: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The error dialog was closed");
    });
  }

  successDialog(title: string): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      data: { title: title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The success dialog was closed");
    });
  }
}
