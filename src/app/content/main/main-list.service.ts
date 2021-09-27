import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainListService {
  public idCollection: number[] = [];

  getUniqueId(): number {
    let currentRandomId: number = Math.floor(Math.random() * 1000);
    while (this.idCollection.includes(currentRandomId)) {
      currentRandomId = Math.floor(Math.random() * 1000);
    }
    this.idCollection.push(currentRandomId);
    return currentRandomId;
  }
}
