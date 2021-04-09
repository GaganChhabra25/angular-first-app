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