import { Observable } from "rxjs";

/**
 * class ClientRepository
 */
export abstract class ClientRepository{
 abstract signupClient(): Observable<void>;
}
