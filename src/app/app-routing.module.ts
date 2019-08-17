import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'links',
    pathMatch: 'full'
  },
  { path: 'links',
    children: [
      {
        path: '',
        loadChildren: './links/links.module#LinksPageModule'
      },
      {
        path: ':id',
        loadChildren: './links/link-detail/link-detail.module#LinkDetailPageModule'
      },
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
