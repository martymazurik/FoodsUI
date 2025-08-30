import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment.prod';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular'
import { LoginComponent } from './login/login.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodsApiService } from './services/foods-api.service';
import { UriListComponent } from './uri-list/uri-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    UriListComponent,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: environment.auth0.redirectUri
      }
    })
  ],
  providers: [FoodsApiService],
  bootstrap: [AppComponent],
  exports: [LoginComponent]
})
export class AppModule { }