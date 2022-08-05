import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
// import { provideRoutes } from "@angular/router";

// routing
export const APP_ROUTES = [

  {
    // path: 'directory/:ninja',
    path: 'directory',
    component: DirectoryComponent
  },

  {
    path: '',
    component: HomeComponent
  }

];

export const APP_ROUTES_PROVIDER = [
  // provideRouter(APP_ROUTES),
];
