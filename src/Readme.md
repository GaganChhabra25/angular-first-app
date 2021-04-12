# How Angular app gets loaded and started

1. At the time of application startup., Angular should be know upfront which all modules to be loaded as SPA.
2. First layer or file is `main.ts`
3. Inside this file we mention the module name that needs to be bootstrapped.In our case its :

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(
  `AppModule`
)

4. Now inside app.module we define everything like :
    - What is the name of component that will be loaded
    - Various imports for this module
    - And the bootstrap class : `AppComponent`

    Everything is defined inside `@NgModule`

            @NgModule({
                declarations: [
                    AppComponent
                ],
                imports: [
                    BrowserModule
                ],
                providers: [],
                bootstrap: [AppComponent]
                }
            )

5. Now `AppComponent` is annotated with `@Component` along with important properties

                @Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
                })
                export class AppComponent {
                }

6. Now everything is known upfront, Angular will try to load `index.html`. In this file we already provide the selector that needs to to be loaded 

                <body>
                <app-root>Loading....</app-root>
                </body>
7. App component got rendered on browser

# Create a New Component
1. `Decorators` : eg @Component 
2. Creating new component from CLI : `ng generate component <name>` | `ng g c <name>`
    - spec file used for testing

# Fully understanding component selectors

1. # As a attribute :

@Component({
   selector: '[app-servers]',  : Will act as an attribute. So need to change caller to <div app-servers></div>

2. # As a class:

@Component({
  selector: '.app-servers', : Will act as class. So need to change caller to  <div class="app-servers"></div>

# Practice Exercise 1
1. Create 2 new components : WarningAlert And SuccessAlert
2. output them beneath each other in AppComponent
3. Output warning or success message in the components
4. Style the components appropriately(maybe some red/green text)

# Understanding Databinding 
1. Binding or communication of data between `Html template <-----> Component`
2. Component -> Html : 
    - String interpolation : {{ data }}
    - Property binding : [property] = "data"
3. Html -> Component 
    - Event binding : (event) = "expression"
4. Combination of both : 2 way binding : 

# Practice exercise on DataBinding
1. Add a input field which updates a property "username" via 2 way binding
2. Output the username property via String Interpolation (in a paragraph below input)
3. Add a button which  may only be clicked if username is NOT empty String
4. Upon clicking the button, the username should be reset to empty string

# Directives 
1.  A directive is a function that executes whenever the Angular compiler finds it in the DOM.
2. The * before the attribute selector indicates that a structural directive should be applied instead of a normal attribute directive or property binding
Eg:
- `*ngIf` : If true, display element, else not
    