import { Component, OnInit } from '@angular/core';
import { MEALS } from '../data/meals';
import { Meal } from '../meal';

@Component({
  selector: 'meal',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meals = MEALS;
  selectedMeal?: Meal;

  constructor() { }

  ngOnInit(): void {

  }
  
  onSelect(meal: Meal)   {
    this.selectedMeal = meal;
  }
}
