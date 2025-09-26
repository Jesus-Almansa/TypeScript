import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';


export const sharedImports = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTooltipModule,
  MatTreeModule,
  MatSelectModule,
  FormsModule
];