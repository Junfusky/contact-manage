import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4',
  ]
  user: User;
  name = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<NewContactComponent>,
    private userService: UserService) { }

  getErrorMessage() {
    return this.name.hasError('name') ? 'You must enter a value' : '';
  }

  ngOnInit(): void {
    this.user = new User();
  }

  save() {
    this.user.name = this.name.value;

    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(this.user);
    })
    
  }

  dismiss() {
    this.dialogRef.close(null)
  }
}
