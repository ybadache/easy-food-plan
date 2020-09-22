import  { MealTime } from './mealTime';

export interface Meal   {
    name: string;
    cat: MealTime;
    ingredients: string[];
}