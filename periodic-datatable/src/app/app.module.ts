import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChemicalElementComponent } from './components/chemical-element/chemical-element.component'
import { ElementGridComponent } from './components/element-grid/element-grid.component'
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component'

@NgModule({
  declarations: [
    AppComponent,
    ChemicalElementComponent,
    PeriodicTableComponent,
    ElementGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }