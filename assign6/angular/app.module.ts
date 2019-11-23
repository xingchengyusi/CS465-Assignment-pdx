import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VideoService } from './video/video.service';
import { VideoComponent } from './video/video.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { MatCardModule,  MatInputModule, MatButtonModule,  MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    NoopAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: SearchComponent},
      {path: 'upload', component: UploadComponent}
  ]) 
],
  declarations: [AppComponent, VideoComponent, SearchComponent, UploadComponent],
  bootstrap: [AppComponent],
  providers: [VideoService]
})
export class AppModule {
}