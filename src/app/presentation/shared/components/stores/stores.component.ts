import { Store } from './../../../../business/models/store/store';
import { GetAllStoreUseCase } from './../../../../business/usecases/store/get-all-store.usecase';
import { Component, OnInit } from '@angular/core';
import { StoreRepository } from '../../../../business/repositories/store.repository';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss'
})
export class StoresComponent implements OnInit {

  private readonly getAllStoreUseCase: GetAllStoreUseCase
  constructor(
    readonly storeRepository: StoreRepository
  ) {
    this.getAllStoreUseCase = new GetAllStoreUseCase(storeRepository)
  }
  ngOnInit(): void {
    this.getListeStore()
  }

  listStores: Store[] = []


  getListeStore() {
    this.getAllStoreUseCase.excute({ pagination: false, page: 0, size: 0 }).subscribe({
      next: (value) => {
        console.log("Liste stores: {}", value)
        this.listStores = value
      }
    })
  }
}
