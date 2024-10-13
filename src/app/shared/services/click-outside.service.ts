import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClickOutsideService {

  constructor() {}

  clickOutside(element: HTMLElement): Observable<Event> {
    return fromEvent(document, 'click').pipe(
      filter((event: Event) => {
        const target = event.target as HTMLElement;
        return !!element && !element.contains(target);
      })
    );
  }
}
