export interface MarketTicket {
  [key: string]: MarketTicketData
}
export interface MarketTicketData {
  id: number
  last: string
  lowestAsk: string
  highestBid: string
  percentChange: string
  baseVolume: string
  quoteVolume: string
  isFrozen: string
  postOnly: string
  high24hr: string
  low24hr: string
}
class MarketTableService {
  public static async getTickets(): Promise<MarketTicket[]> {
    return await fetch('http://localhost:4000/public?command=returnTicker')
      .then((response) => response.json())
      .then((response) => {
        return [response]
      })
  }
}
export default MarketTableService
