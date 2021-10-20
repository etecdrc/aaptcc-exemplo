import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resumo',
    loadChildren: () => import('./resumo/resumo.module').then(m => m.ResumoPageModule)
  },
  {
    path: 'cronograma',
    loadChildren: () => import('./cronograma/cronograma.module').then(m => m.CronogramaPageModule)
  },
  {
    path: 'introducao',
    loadChildren: () => import('./introducao/introducao.module').then(m => m.IntroducaoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
