import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChemicalElementComponent } from './components/chemical-element/chemical-element.component'
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component'
import { ElementGridComponent } from './components/element-grid/element-grid.component'
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component'
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ThermostatComponent } from './components/thermostat/thermostat.component';
import { LegendComponent } from './components/legend/legend.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ChemicalElementComponent,
    PeriodicTableComponent,
    ElementGridComponent,
    TooltipComponent,
    NavigationBarComponent,
    ThermostatComponent,
    LegendComponent,
    HeaderComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }