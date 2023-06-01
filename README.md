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

### TAsk: Setup JSON Server
