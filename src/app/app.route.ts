import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
/**
 * Created by mpande on 11/19/17.
 */


const appRoutes: Routes = [
  //  { path: '', redirectTo: '/', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  //  { path:'iarchive', component: IArchiveComponent},
  //  { path: 'pivottable', component: PivotTableComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
