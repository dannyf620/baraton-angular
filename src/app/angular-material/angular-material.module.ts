import { NgModule } from '@angular/core';
import { MatListModule, MatIconModule, MatButtonModule,MatMenuModule,MatInputModule,MatCardModule,MatDialogModule,MatToolbarModule} from '@angular/material';
// import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [MatListModule,MatIconModule, MatButtonModule,MatInputModule,MatCardModule,MatDialogModule,MatMenuModule,MatToolbarModule],
  exports: [MatListModule,MatIconModule, MatButtonModule,MatInputModule,MatCardModule,MatDialogModule,MatMenuModule,MatToolbarModule],
  declarations: []
})
export class AngularMaterialModule { }
