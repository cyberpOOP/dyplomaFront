import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then((m) => m.TemplateModule)
  },
  {
    path: 'course/:id',
    loadChildren:  () => import('@modules/course-page/course-page.module').then((m) => m.CoursePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutes{}
