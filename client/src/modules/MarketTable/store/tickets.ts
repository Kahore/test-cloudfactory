import { makeAutoObservable } from 'mobx'
import { FlowReturn } from './types'
import MarketTableService, { MarketTicket } from '../service'

export class TicketsStore {
  items: MarketTicket[] = []
  status: 'init' | 'loading' | 'success' | 'error' = 'init'

  constructor() {
    makeAutoObservable(this)
  }

  *fetchTickets(): FlowReturn<typeof MarketTableService.getTickets> {
    try {
      if (this.items.length === 0) {
        this.status = 'loading'
      }
      this.items = yield MarketTableService.getTickets()
      this.status = 'success'
    } catch (error) {
      this.status = 'error'
      console.error(error)
    }
  }
  *updateTickets(): FlowReturn<typeof MarketTableService.getTickets> {
    try {
      this.items = yield MarketTableService.getTickets()
      // const arr = [...this.items, ...newData]
      // this.items.replace(arr)
      // this.items = newData;
      this.status = 'success'
    } catch (error) {
      this.status = 'error'
      console.error(error)
    }
  }
}
