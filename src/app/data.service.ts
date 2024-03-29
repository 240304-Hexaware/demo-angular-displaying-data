import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Object[] = [
    {firstName: "Kyle", lastName: "Plummer", age: 38},
    {firstName: "Luke", lastName: "Skywalker", age: 60},
    {firstName: "Han", lastName: "Solo", age: 70, hairColor: "brown"}
  ]
}
