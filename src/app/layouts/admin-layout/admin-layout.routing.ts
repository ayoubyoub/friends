import { InteretComponent } from "./../../interet/interet.component";
import { Routes } from "@angular/router";

import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { NotfoundComponent } from "app/notfound/notfound.component";
import { AdminLayoutModule } from "./admin-layout.module";

export const AdminLayoutRoutes: Routes = [
  /*  { path: "user-profile", component: UserProfileComponent, title: "Profile" },
  { path: "table-list", component: TableListComponent, title: "Users" },
  { path: "interet", component: InteretComponent, title: "Interet" },
  { path: "", redirectTo: "/table-list", pathMatch: "full" },
  { path: "**", component: AdminLayoutModule }, */
];
