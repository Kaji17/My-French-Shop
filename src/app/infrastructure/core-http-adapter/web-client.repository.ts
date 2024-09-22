import { Observable } from "rxjs";
import { ClientRepository } from "../../business/repositories/client.repository";
import { HttpClient } from "@angular/common/http";

export class WebClientRepository extends ClientRepository {

  constructor(
    private http: HttpClient,
  ) {
    super()
  }
  signupClient(): Observable<void> {
    throw new Error("Method not implemented.");
  }
}
