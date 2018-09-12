import { NgModule } from '@angular/core';
import { MatListModule, MatIconModule, MatButtonModule, MatMenuModule, MatInputModule, MatCardModule, MatDialogModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
