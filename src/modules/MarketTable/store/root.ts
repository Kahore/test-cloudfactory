import { makeAutoObservable } from 'mobx'
import { TicketsStore } from './tickets'

class RootStore {
  tickets = new TicketsStore()

  constructor() {
    makeAutoObservable(this)
  }
}

export type { RootStore }
export const store = new RootStore()
