import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, exhaustMap, map, take, tap} from 'rxjs/operators';

import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from '../auth/auth.service';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-487a6.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
      return this.http.get<Recipe[]>(
          'https://ng-course-487a6.firebaseio.com/recipes.json'
        ).pipe(
          map(recipes => {
            return Object.keys(recipes).map(resID => {
              return {...recipes[resID], ingredients: recipes[resID].ingredients ? recipes[resID].ingredients : []};
            });
          }),
          tap(recipes => {
            this.recipeService.setRecipes(recipes);
          }),
          catchError(error => {
            return throwError('We got no information');
          })
        );
  }
}
