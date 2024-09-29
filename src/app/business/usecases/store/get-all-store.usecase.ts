import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { UseCase } from "../../base/use-case";
import { ParamGetStore, Store } from "../../models/store/store";
import { StoreRepository } from "../../repositories/store.repository";

export class GetAllStoreUseCase implements UseCase<ParamGetStore, Observable<Store[]>> {

  static subject = new BehaviorSubject<Store[]>([])
  static value$ = GetAllStoreUseCase.subject.asObservable();

  constructor(
    private repository: StoreRepository,) {
  }
  excute(commande: ParamGetStore): Observable<Store[]> {
    return this.repository.getAllStore(commande).pipe(
      tap((response) => response))
  }
}
