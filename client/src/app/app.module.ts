import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { FormsModule } from '@angular/forms';
import { EditpostComponent } from './editpost/editpost.component';
import { NewpostComponent } from './newpost/newpost.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

const routes: Routes = [
  { path: '', redirectTo: '/allposts', pathMatch: 'full'},
  { path: 'allposts', component: AllPostsComponent },
  { path: 'postdetail/:id', component: PostdetailComponent },
  { path: 'editpost/:id', component: EditpostComponent },
  { path: 'newpost', component: NewpostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AllPostsComponent,
    PostdetailComponent,
    EditpostComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    ),
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
