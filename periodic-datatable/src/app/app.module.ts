import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChemicalElementComponent } from './components/chemical-element/chemical-element.component'
import { ControlPanelComponent } from './components/control-panel/control-panel.component'
import { ElementGridComponent } from './components/element-grid/element-grid.component'
import { PeriodicTableComponent } from './components/periodic-table/periodic-table.component'
import { TooltipComponent } from './components/tooltip/tooltip.component'

@NgModule({
  declarations: [
    AppComponent,
    ChemicalElementComponent,
    PeriodicTableComponent,
    ElementGridComponent,
    TooltipComponent,
    ControlPanelComponent,
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