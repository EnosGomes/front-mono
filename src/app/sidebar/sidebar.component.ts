import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'pe-7s-home', class: '' },
    { path: '/consultas', title: 'Consultas',  icon:'pe-7s-user', class: '' },
    //{ path: '/usuarios', title: 'Usuários',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Hospitais',  icon:'pe-7s-note2', class: '' },
    //{ path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    //{ path: '/edit', title: 'Edit',  icon:'pe-7s-rocket', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
