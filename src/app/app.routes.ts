import { Routes } from '@angular/router';
import { Portfolio } from './portfolio/portfolio';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:Home,title:'Home Page'},
    {path:'about',component:About, title:'About'},
    {path:'portfolio', component:Portfolio, title:'Portfolio'},
    {path:'contact', component:Contact, title:'Contact'},

    // {path:'**', component:NotFound},
];
