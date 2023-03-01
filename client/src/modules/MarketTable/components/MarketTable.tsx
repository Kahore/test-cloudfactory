import { useEffect, useState } from 'react'
import TableShared from '../../../shared/Table'
import { MarketTicket } from '../service'
import { TableRow } from '../../../ui/TableRow'
import { TableCell } from '../../../ui/TableCell'
import formatAsPercentage from '../helpers/formatAsPercentage'
import { useStore } from '../store'
import { flowResult, toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import ModalTicket from './ModalTicket'
import { marketTableHeader } from '../config'
import useToastError from '../../../hooks/useToastError'

const MarketTable = observer(() => {
  const [ticket, setTicket] = useState<MarketTicket | null>(null)
  const { notify, RenderToastError } = useToastError()
  const store = useStore()
  const tickets = useStore((state) => state.tickets.items)

  const onSelectTicket = (ticket: MarketTicket) => {
    setTicket(toJS(ticket))
  }

  useEffect(() => {
    const result = flowResult(store.tickets.fetchTickets())
    return () => {
      result.cancel()
    }
  }, [])
  useEffect(() => {
    if (ticket === null) {
      const interval = setInterval(() => {
        const result = flowResult(store.tickets.fetchTickets())
        return () => {
          result.cancel()
        }
      }, 5000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [ticket])

  const renderList = () => {
    const status = store.tickets.status
    if (status === 'init' || status === 'loading') {
      return <h5 className={'text-gray-300'}>Loading...</h5>
    }

    if (status === 'error') {
      notify()
      return <RenderToastError />
    }

    return (
      <TableShared columns={marketTableHeader}>
        {tickets.map((t, i) =>
          Object.entries(t).map(([key, value]) => (
            <TableRow key={i + '_' + value.id} onClick={() => onSelectTicket({ [key]: value })}>
              <TableCell className={'px-4'}>{key}</TableCell>
              <TableCell>{value.last}</TableCell>
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
    )
  }

  return (
    <>
      {renderList()}
      {ticket && <ModalTicket ticket={toJS(ticket)} onClose={() => setTicket(null)} />}
    </>
  )
})
export default MarketTable
