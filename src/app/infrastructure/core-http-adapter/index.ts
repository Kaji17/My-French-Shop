import { forwardRef, Provider } from '@angular/core';

import { ClientRepository } from '../../business/repositories/client.repository';
import { StoreRepository } from '../../business/repositories/store.repository';
import { WebClientRepositoryAdapter } from './web-client.repository';
import { WebStoreRepositoryAdapter } from './web-store.repository';

export const HTTP_REPOSITORIES_ADAPTERS: Provider[] = [
  { provide: ClientRepository, useExisting: forwardRef(() => WebClientRepositoryAdapter) },
  { provide: StoreRepository, useExisting: forwardRef(() => WebStoreRepositoryAdapter) }
]
