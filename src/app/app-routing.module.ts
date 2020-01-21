import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
/*  { path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
     
},*/
  {
    path: 'splash',
    children: [
      {
        path: '',
        loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
      }
    ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
