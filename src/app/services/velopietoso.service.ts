import { Injectable } from '@angular/core';
import {first, map, Observable, of, tap} from 'rxjs';
import {createClient} from '@supabase/supabase-js';
import {environment} from '../../environments/environment';
import {fromPromise} from 'rxjs/internal/observable/innerFrom';

@Injectable({
  providedIn: 'root'
})
export class VelopietosoService {

  private TABLE_NAME: string = 'velopietoso_counter';
  private supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
  constructor() { }

  getCounter(): Observable<{ counter: number, create_at: string, id: string }> {
    return fromPromise(this.supabaseClient.from(this.TABLE_NAME).select()).pipe(
      map(({data, error}) => data![0]),
      tap(console.log)
    );
  }

  setCounter(rowId: string, value: number): void {
    fromPromise(this.supabaseClient.from(this.TABLE_NAME).update({ counter: value }).eq('id', rowId)).pipe(
      first(),
      tap(console.log)
    ).subscribe();
  }
}
