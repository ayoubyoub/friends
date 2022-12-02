import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { InteretComponent } from "app/interet/interet.component";
import { AdminGuard } from "app/guards/admin.guard";
import { MatIconModule } from "@angular/material/icon";

import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";

const routes: Routes = [
  {
    path: "user-profile/:id",
    component: UserProfileComponent,
    title: "Profile",
  },
  { path: "table-list", component: TableListComponent, title: "Utilisateurs" },

  {
    path: "interet",
    component: InteretComponent,
    title: "Interet",
    canActivate: [AdminGuard],
  },
  { path: "", redirectTo: "/table-list" },
  { path: "**", redirectTo: "/table-list" },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCardModule,
    MatIconModule,

    MatProgressBarModule,
    MatToolbarModule,
  ],
  declarations: [UserProfileComponent, TableListComponent, InteretComponent],
})
export class AdminLayoutModule {}
