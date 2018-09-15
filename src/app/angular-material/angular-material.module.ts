import { NgModule } from '@angular/core';
import { MatListModule, MatIconModule, MatButtonModule, MatMenuModule, MatInputModule, MatCardModule, MatDialogModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

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
    MatExpansionModule,
    MatBottomSheetModule
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
    MatExpansionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatBottomSheetModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
