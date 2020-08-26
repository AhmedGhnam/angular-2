import { NgModule } from '@angular/core';

import { HomeComponent } from './core/home/home.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';


import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
  { path : 'shoppingList', component: ShoppingListComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}

