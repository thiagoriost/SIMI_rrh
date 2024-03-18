import { ResolveFn, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
// import { DashboardPageComponent } from './modules/ideas/pages/dashboard-page/dashboard-page.component';
// import { ConfigPageComponent } from './modules/ideas/pages/config-page/config-page.component';
// import { NewIdeaPageComponent } from './modules/ideas/pages/new-idea-page/new-idea-page.component';
// import { PerfilPageComponent } from './modules/ideas/pages/perfil-page/perfil-page.component';

export const routes: Routes = [


  {
    path:'home',
    loadComponent:()=>import('./modules/ideas/pages/home-page/home-page.component'),
    children:[
      // {
      //   path:'dashboard', title:'Dashboard', component: DashboardPageComponent
      // },
      // {
      //   path:'config', title:'Config Page', component: ConfigPageComponent
      // },
      // {
      //   path:'idea', title:'Idea', component: NewIdeaPageComponent
      // },
      // {
      //   path:'perfil', title:'Perfil', component: PerfilPageComponent
      // },
      {
        path:'', redirectTo: '/home/dashboard', pathMatch:'full'
      }
    ]
  },
  {
    path:'login', component: LoginPageComponent
  },
  // {
  //   path:'**', redirectTo: 'login',
  // },
];
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('dashboard');

// export const routes: Routes = [


//   {
//     path:'home',
//     loadComponent:()=>import('./modules/ideas/pages/home-page/home-page.component'),
//     children:[
//       {
//         path:'dashboard', title:'Dashboard', loadComponent:()=>import('./modules/ideas/pages/dashboard-page/dashboard-page.component')
//       },
//       {
//         path:'config', title:'Config Page', loadComponent:()=>import('./modules/ideas/pages/config-page/config-page.component')
//       },
//       {
//         path:'idea', title:'Idea', loadComponent:()=>import('./modules/ideas/pages/new-idea-page/new-idea-page.component')
//       },
//       {
//         path:'perfil', title:'Perfil', loadComponent:()=>import('./modules/ideas/pages/perfil-page/perfil-page.component')
//       },
//       {
//         path:'', redirectTo: '/home/dashboard', pathMatch:'full'
//       }
//     ]
//   },
//   {
//     path:'login', component: LoginPageComponent
//   },
//   // {
//   //   path:'**', redirectTo: 'login',
//   // },
// ];
