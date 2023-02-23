import { useEffect, useState } from 'react'
import TableShared, { TableColumn } from '../../../shared/Table'
import MarketTableService, { MarketTicket } from '../service'
import { TableRow } from '../../../ui/TableRow'
import { TableCell } from '../../../ui/TableCell'
import formatAsPercentage from '../helpers/formatAsPercentage'

const marketTableHeader: TableColumn[] = [
  { id: 'name', label: 'Имя тикера' },
  { id: 'last', label: 'last' },
  { id: 'highestBid ', label: 'highestBid ' },
  { id: 'percentChange', label: 'percentChange' },
]
const MarketTable = () => {
  const [tickets, setTickets] = useState<MarketTicket[]>([])

  const getData = async () => {
    try {
      const resp = await MarketTableService.getTickets()
      setTickets(resp)
    } catch (error) {
      console.error(error)
    }
  }
  const onSelectTicket = (ticket: MarketTicket) => {
    console.log('onSelectTicket -> ticket', ticket)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <TableShared columns={marketTableHeader}>
        {tickets.map((t, i) =>
          Object.entries(t).map(([key, value]) => (
            <TableRow key={i + '_' + value.id} onClick={() => onSelectTicket({ [key]: value })}>
              <TableCell className={'px-4'}>{key}</TableCell>
              <TableCell>{value.highestBid}</TableCell>
              <TableCell>{value.highestBid}</TableCell>
              <TableCell
                className={Number(value.percentChange) > 0 ? 'text-green-400' : 'text-red-400'}
              >
                {formatAsPercentage(Number(value.percentChange))}
              </TableCell>
            </TableRow>
          )),
        )}
      </TableShared>
    </div>
  )
}
export default MarketTable
