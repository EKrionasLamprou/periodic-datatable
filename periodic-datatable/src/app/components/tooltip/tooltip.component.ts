import { Component, OnInit } from '@angular/core';
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { Observer } from 'src/app/models/observer.model'
import { ElementSelector } from 'src/app/services/element-selector.service'

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent implements OnInit, Observer {

  constructor(private elementSelector: ElementSelector) { }

  ngOnInit(): void {
    this.elementSelector.subscribe(this)
  }

  element: ChemicalElement | null = null

  public handle(value: ChemicalElement | null) {
    this.element = value
  }
}