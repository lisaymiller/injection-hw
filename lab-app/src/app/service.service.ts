import { Injectable } from '@angular/core';
import { Person } from './person';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private personArr: Person[] = [
    new Person('Lisa'),
    new Person('Diana'),
    new Person('River'),
    new Person('Beatrix'),
    new Person('Daisy'),
  ];

  getPerson(): Observable<Person[]> {
    this.delay(4000);
    // return this.personArr;
    return of(this.personArr);
  }

  async delay(ms: number) {
    await new Promise((resolve) => setTimeout(() => resolve(), ms));
  }
}
