import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuModule} from "../app/modules/menu/menu.module";
import { ChartsComponent } from './components/charts/charts.component';
import {HttpProviderService} from "./services/http-provider.service";
import {UtilitiesService} from "./services/utilities.service";
import { HomeComponent } from './pages/home/home.component';
import { CoreAppsComponent } from './pages/core-apps/core-apps.component';
import {CoreAppsService} from "./services/core-apps.service";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {DhisHelpService} from "./services/dhis-help.service";
import { GetHelpComponent } from './pages/get-help/get-help.component';
import { OptionViewerComponent } from './components/option-viewer/option-viewer.component';
import { SettingsComponent } from './helpComponents/settings/settings.component';
import { OrgUnitsComponent } from './helpComponents/org-units/org-units.component';
import { DataQualityComponent } from './helpComponents/data-quality/data-quality.component';
import { DataSetsComponent } from './helpComponents/data-sets/data-sets.component';
import { AboutDhisComponent } from './helpComponents/about-dhis/about-dhis.component';
import { StartingDhisComponent } from './helpComponents/starting-dhis/starting-dhis.component';
import { IndicatorsComponent } from './helpComponents/indicators/indicators.component';
import { UserManagementComponent } from './helpComponents/user-management/user-management.component';
import { UsingGisComponent } from './helpComponents/using-gis/using-gis.component';
import { ReportsModuleComponent } from './helpComponents/reports-module/reports-module.component';
import { DataAdministrationComponent } from './helpComponents/data-administration/data-administration.component';
import { DataElementsComponent } from './helpComponents/data-elements/data-elements.component';
import { ImportExportComponent } from './helpComponents/import-export/import-export.component';
import {DataVisualizerComponent} from "./helpComponents/data-visualizer/data-visualizer.component";
import {DataEntryComponent} from "./helpComponents/data-entry/data-entry.component";
import { DashboardComponent } from './helpComponents/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    DataEntryComponent,
    DataVisualizerComponent,
    HomeComponent,
    CoreAppsComponent,
    SideNavComponent,
    GetHelpComponent,
    OptionViewerComponent,
    SettingsComponent,
    OrgUnitsComponent,
    DataQualityComponent,
    DataSetsComponent,
    AboutDhisComponent,
    StartingDhisComponent,
    IndicatorsComponent,
    UserManagementComponent,
    UsingGisComponent,
    ReportsModuleComponent,
    DataAdministrationComponent,
    DataElementsComponent,
    ImportExportComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, MenuModule
  ],
  providers: [HttpProviderService,UtilitiesService, CoreAppsService, DhisHelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
