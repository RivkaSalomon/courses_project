import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent},
    { path: 'user', loadChildren: () => import('./user/user-routing.module').then(c => c.UserRoutesModule) },
    { path: 'course', loadChildren: () => import('./course/course-routing.module').then(c => c.CourseRoutesModule) },
    { path: "**", component: NotFoundComponent },

];
