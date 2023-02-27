import getKey from './getKey'
import { MarketTicket, MarketTicketData } from '../service'

const getKeyValue = (ticket: MarketTicket): MarketTicketData => {
  return ticket[getKey(ticket)]
}
export default getKeyValue
