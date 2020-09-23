import { Component, OnInit, ElementRef, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [
  ]
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() ingredeientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShoppingListService) { }
  ngOnInit(): void {
  }
  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.slService.addIngredient(newIngredient);
     }

}
