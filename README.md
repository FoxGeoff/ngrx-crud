# NgrxCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Project Introduction

### Task: Add bootstrap

1. `npm i bootstrap`
2. Configure Bootstrap CSS and JS files in 'angular.json'

```json
...
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js"]
          },
...
```

### Task: Add NabBar component in app.component.htnl

```html
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
```

### Task: Setup JSON Server

1. `npm install -g json-server`

```json
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "json-run": "json-server --watch db.json" <=
```

1. Now Run: `npm run json-run`
2. We now have a database on file: db.json
3. Now access the API endpoint like '<http://localhost:3000/books>'. Good to go!

### Task: Create An Angular Feature Module(Ex: Books Module) And A Component(Ex: Home Component)

1. `ng generate module books --routing`
2. `ng generate component books/home`

### Task: use the lazy loading technique for the modules

```typescript
// app-routing.module.ts
...
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./books/books.module').then((b) => b.BooksModule),
  },
];
...
```

```typescript
// book-routing.module.ts
...
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
...
```

### Task: Install NgRx Packages

1. `ng add @ngrx/store`
2. `ng add @ngrx/effects`
3. `ng add @ngrx/store-devtools`

### Task: Create A Feature Store(Ex: Books Module State Management Store)

```typescript
// books/store/book.ts
export interface Book {
  id: number;
  name: string;
  author: string;
  cost: number;
}
```

### Task: Add Reducer

Reducer is a pure function, that gets invoked by the actions and then generates a new state in the store based on the action. Let's create a 'Books' reducer.

1. `ng generate class books/store/books.reducer`

### Task: Add Selector

1. `ng generate class books/store/books.selector`

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('mybooks', bookReducer),] <=
})
export class BooksModule { }
```

### Task: Add Action

1. `ng generate class books/store/books.action`
2. The 'Actions' represents the events raised by the component to communicate either with reducers or effects to update the data to store. Let's create a 'Books' action.
