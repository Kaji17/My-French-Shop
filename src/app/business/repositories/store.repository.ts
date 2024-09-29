import { Observable } from "rxjs";
import { ParamGetStore, Store } from "../models/store/store";

export abstract class StoreRepository {

  abstract getAllStore(params: ParamGetStore): Observable<Store[]>;
}
