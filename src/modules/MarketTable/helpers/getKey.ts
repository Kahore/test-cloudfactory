import { MarketTicket } from '../service'

const getKey = (ticket: MarketTicket): string => {
  return Object.keys(ticket)[0]
}
export default getKey
