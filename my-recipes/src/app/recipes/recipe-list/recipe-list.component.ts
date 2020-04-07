import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe> = [
    new Recipe('A Test recipe', 'This is a simple test 1', 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg'),
    new Recipe('B Test recipe', 'This is a simple test 2', 'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg'),
    new Recipe('B Test recipe', 'This is a simple test 3', 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg'),
    new Recipe('D Test recipe', 'This is a simple test 4', 'https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
