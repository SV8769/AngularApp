import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Recipe } from '../../../recipe.model';
import { RecipeService } from '../../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
