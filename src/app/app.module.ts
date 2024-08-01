import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { SongTopComponent } from './song-top/song-top.component';
import { AddSongFormComponent } from './add-song-form/add-song-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongTopComponent,
    AddSongFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
