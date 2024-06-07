import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppLoaderComponent } from './app-loader/app-loader.component';
import { AppLoaderService } from './app-loader/app-loader.service';
import { AppConfirmService } from './app-confirm/app-confirm.service';
import { AppComfirmComponent } from './app-confirm/app-confirm.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatButtonModule, MatIconModule, MatListModule, MatInputModule, MatProgressSpinnerModule],
  declarations: [AppLoaderComponent, AppComfirmComponent],
  exports: [
    CommonModule,
    AppLoaderComponent,
    AppComfirmComponent
  ],
  providers: [AppLoaderService, AppConfirmService]
})
export class SharedModule { }
