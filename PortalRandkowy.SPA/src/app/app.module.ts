import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule, PaginationModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UserCardComponent } from './user/user-card/user-card.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavesChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotosComponent } from './user/photos/photos.component';
import { TimeAgoPipe } from './_pipes/time-ago-pipe';
import { LikesResolver } from './_resolvers/likes.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { UserMessagesComponent } from './user/user-messages/user-messages.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      UserListComponent,
      MessagesComponent,
      LikesComponent,
      UserCardComponent,
      UserDetailComponent,
      UserEditComponent,
      PhotosComponent,
      TimeAgoPipe,
      UserMessagesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      BrowserAnimationsModule,
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      ReactiveFormsModule,
      NgxGalleryModule,
      FileUploadModule
   ],
   providers: [
      AuthService,
      AlertifyService,
      UserService,
      AuthGuard,
      ErrorInterceptorProvider,
      UserDetailResolver,
      UserListResolver,
      UserEditResolver,
      PreventUnsavesChanges,
      LikesResolver,
      MessagesResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }