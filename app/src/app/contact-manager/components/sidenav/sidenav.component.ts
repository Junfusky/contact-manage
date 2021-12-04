import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showFiller = false;
  isScreenSmall: boolean;

  users: Observable<User[]>;
  @ViewChild('drawer', {
    static: true
 }) public drawer: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver, private userServie: UserService, private router: Router) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      })

      this.users = this.userServie.users;
      this.userServie.loadAll();

      this.router.events.subscribe(() => {
        if(this.isScreenSmall) {
          this.drawer.close();
        }
      })
  }

}
