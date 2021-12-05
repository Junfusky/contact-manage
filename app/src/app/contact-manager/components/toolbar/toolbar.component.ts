import { NewContactComponent } from './../new-contact/new-contact.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter()
  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  openAddContactDialog(): void {
    let dialogRef = this.dialog.open(NewContactComponent, {
      width: '450px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.openSnackBar("Contace added", "Navigate")
        .onAction().subscribe(() => {
          this.router.navigate(['/contactmanager', result.id])
        })
      }
    })
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {duration: 5000});
  }

}
