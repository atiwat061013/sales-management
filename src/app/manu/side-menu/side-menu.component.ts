import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  isCollapsed = false;
  currentRoute: any;
  namePage: any;
  menuList = [
    {
      title: 'Dashboard',
      url: 'dashboard',
      icon: 'swap',
      child: [],
    },
    // {
    //   title: 'Transaction log',
    //   url: 'transaction-log',
    //   icon: 'swap',
    //   child: [],
    // },
  ];

  sidebar: boolean = true;
  constructor(private router: Router) {
    console.log(this.router.url);

    let path = this.router.url.split('/')[1];
    console.log(path);
    if (path == 'dashboard') {
      this.namePage = 'Dashboard';
    } else if (path == 'transaction-log') {
      this.namePage = 'Transaction log';
    }
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.sidebar = !this.sidebar;
  }

  signout() {
    // this.dataService.forceLogout();
  }
}
