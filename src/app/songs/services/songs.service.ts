import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Store } from 'src/app/store';
import { Observable } from 'rxjs';

export interface Song {
  id: number;
  artist: string;
  track: string;
  listened: boolean;
  favourite: boolean;
}

export type ToggleSongProps = 'listened' | 'favourite';

@Injectable()
export class SongsService {
  constructor(private http: HttpClient, private store: Store) {}

  getPlaylist$: Observable<Song[]> = this.http
    .get<Song[]>('http://localhost:3000/playlist')
    .pipe(tap(res => this.store.set('playlist', res)));

  updateSong(song: Song): void {
    this.http
      .put<Song>(`http://localhost:3000/playlist/${song.id}`, song)
      .subscribe(updatedSong => {
        const curPlaylist = this.store.value.playlist;
        const updatedPlaylist = curPlaylist.map(item => {
          if (item.id === song.id) {
            return { ...song };
          } else {
            return item;
          }
        });
        this.store.set('playlist', updatedPlaylist);
      });
  }
}
