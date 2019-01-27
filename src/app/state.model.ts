import { Song } from './songs/services/songs.service';

export type StateKeys = 'playlist' | 'todos';

export interface State {
  playlist: Song[];
  todos: any[];
}
