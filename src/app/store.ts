import { State, StateKeys } from './state.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

const initialState: State = {
  playlist: [],
  todos: []
};

export class Store {
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable().pipe(
    distinctUntilChanged()
  );

  get value() {
    return this.subject.value;
  }

  select<T>(name: StateKeys): Observable<T> {
    return this.store.pipe(
      pluck(name)
    );
  }

  set(name: StateKeys, state: any) {
    this.subject.next({
      ...this.value,
      [name]: state
    });
  }

}
