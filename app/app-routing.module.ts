import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { BlogComponent } from './blog-component/blog-component.component';
import { PostComponent } from './post-component/post-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'post/:id', component: PostComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
