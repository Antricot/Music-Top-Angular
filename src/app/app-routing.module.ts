import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongTopComponent } from './song-top/song-top.component';
import { AddSongFormComponent } from './add-song-form/add-song-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/songs', pathMatch: 'full' },
  { path: 'songs', component: SongTopComponent },
  { path: 'add-song', component: AddSongFormComponent },
  { path: 'edit-song/:id', component: AddSongFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
