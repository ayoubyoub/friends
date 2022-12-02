import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  getisAdmin,
  getUserIdStorage,
  removeAdmin,
  removeId,
  removeToken,
} from "app/partage/storageLocal";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/user-profile/:id", title: "Profile", icon: "person", class: "" },
  {
    path: "/table-list",
    title: "Users",
    icon: "content_paste",
    class: "",
  },

  {
    path: "/interet",
    title: "Interet",
    icon: "emoji_flags",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  userId: number;
  isAdmin: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.userId = getUserIdStorage();
    this.isAdmin = getisAdmin();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
  logout() {
    removeToken();
    removeId();
    removeAdmin();
    this.router.navigateByUrl("/login");
  }
}
