import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatMenuModule,
  MatTooltipModule,
  MatTooltipDefaultOptions,
  MatProgressSpinnerModule,
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
  MatProgressSpinnerDefaultOptions,
  MatTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 300,
  touchendHideDelay: 300,
};

export const myCustomProgressSpinnerDefaults: MatProgressSpinnerDefaultOptions = {
  strokeWidth: 4,
  _forceAnimations: true
};

@NgModule({
  imports: [
    PlatformModule,
    ObserversModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    ScrollDispatchModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  exports: [
    PlatformModule,
    ObserversModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    ScrollDispatchModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults },
    { provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, useValue: myCustomProgressSpinnerDefaults }
  ],
})
export class ExternalModule { }
