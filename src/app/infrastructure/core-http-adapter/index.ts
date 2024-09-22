import { forwardRef, Provider } from "@angular/core";
import { ClientRepository } from "../../business/repositories/client.repository";
import { WebClientRepository } from "./web-client.repository";

export const HTTP_REPOSITORIES_ADAPTERS: Provider[] = [
  { provide: ClientRepository, useExisting: forwardRef(() => WebClientRepository) },
]
