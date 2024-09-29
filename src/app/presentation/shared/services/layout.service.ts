import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  readonly isAccueilPageSubject: BehaviorSubject<Boolean>;
  readonly isAccueilPage$: Observable<Boolean>
  constructor() {
    this.isAccueilPageSubject = new BehaviorSubject<Boolean>(this.setIsAccueilPage())
    this.isAccueilPage$ = this.isAccueilPageSubject.asObservable()
  }

  setIsAccueilPage(): Boolean {
    return true;
  }

  setIsNotAccueilPage(): Boolean {
    return false;
  }
}
