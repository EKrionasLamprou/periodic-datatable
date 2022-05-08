import { Component, Input, OnInit } from '@angular/core'
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { GridTypeError } from 'src/app/models/error.model'
import { ElementGridService } from 'src/app/services/element-grid.service'

/**
 * Represents a grid of elements on the periodic table. It can be either the
 * top grid, that contains all the elements from period 1 to 7 excluding the
 * f-block, or the bottom grid that contains all the elements of the f-block.
 */
@Component({
  selector: 'app-element-grid[gridType]',
  templateUrl: './element-grid.component.html',
  styleUrls: ['./element-grid.component.sass']
})
export class ElementGridComponent implements OnInit {
  @Input()
  gridType!: string

  constructor(private elementGridService: ElementGridService) {
  }
  ngOnInit(): void {
    this.elements = this.getGridElements()
  }

  /** The chemical elements that belong to this grid. */
  elements!: (ChemicalElement | null)[]

  /**
   * Returns an array with {@linkcode ChemicalElement} objects and null, that
   * represent the chemical elements and the whitespaces respectively on the
   * periodic table.
   */
  private getGridElements(): (ChemicalElement | null)[] {
    if (!this.gridType){
      throw new GridTypeError(this.gridType)
    }

    switch (this.gridType?.toLowerCase()) {
      case 'top':
        return this.elementGridService.getGrid().top()
      case 'bottom':
        return this.elementGridService.getGrid().bottom()
      default:
        throw new GridTypeError(this.gridType)
    }
  }
}