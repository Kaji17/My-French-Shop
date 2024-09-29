import { map, Observable, tap } from "rxjs";
import { ParamGetStore, Store } from "../../business/models/store/store";
import { StoreRepository } from "../../business/repositories/store.repository";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { UrlBuilder } from "../../presentation/shared/utils/url-builder";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class WebStoreRepositoryAdapter extends StoreRepository {

  constructor(
    private http: HttpClient
  ) {
    super();
  }
  getAllStore(params: ParamGetStore): Observable<Store[]> {
    const url = new UrlBuilder()
      .setUrl(environment.baseUrl)
      .setEndPoint("/api/v1/myfrenchshop/stores/get/stores")
      .addQueryParam("storeid", params.storeid)
      .addQueryParam("nom", params.nom)
      .addQueryParam("pagination", params.pagination)
      .addQueryParam("page", params.page)
      .addQueryParam("size", params.size)
      .build();
    return this.http.get<Store[]>(url).pipe(tap(() => {
    }));
  }
}
