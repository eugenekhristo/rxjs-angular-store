import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ListenedComponent } from './components/listened/listened.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { SongsService } from './services/songs.service';
import { SongsListComponent } from './components/songs-list/songs-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PlaylistComponent, ListenedComponent, FavouritesComponent, SongsListComponent],
  exports: [PlaylistComponent, ListenedComponent, FavouritesComponent],
  providers: [SongsService]
})
export class SongsModule {}
