import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-success-dialog",
  templateUrl: "./success-dialog.component.html",
  styleUrls: ["./success-dialog.component.css"]
})
export class SuccessDialogComponent implements OnInit {
  public succMessage: string;

  constructor(
    private dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.succMessage = this.data.title;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
