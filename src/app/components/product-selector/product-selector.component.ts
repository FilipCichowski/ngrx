import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductCategory} from "../../utilities/Product";

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.css']
})
export class ProductSelectorComponent  {
  @Output() selectedFilter = new EventEmitter<any>();
  @Input() filters!: string[];
  categories = ProductCategory;

  onFilterSelected(key: string): void {
    this.selectedFilter.emit(key)
  }
}
