import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-error-dialog",
  templateUrl: "./error-dialog.component.html",
  styleUrls: ["./error-dialog.component.css"]
})
export class ErrorDialogComponent implements OnInit {
  public errorMessage: string;

  constructor(
    private dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.errorMessage = this.data.title;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
