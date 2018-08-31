import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent} from './navbar.component';


@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class NavbarModule {}
