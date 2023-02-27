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
    return await fetch(`${process.env.REACT_APP_API}/public?command=returnTicker`,{
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        return [response]
      })
  }
}
export default MarketTableService
