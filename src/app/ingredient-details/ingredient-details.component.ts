import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent implements OnInit {

  @Input() ingredientsList ?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
