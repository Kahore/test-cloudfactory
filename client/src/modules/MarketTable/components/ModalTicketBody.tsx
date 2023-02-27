import { FC } from 'react'
import ModalBody from '../../../ui/ModalBody'
import CardItem from '../../../ui/CardItem'
import { MarketTicketData } from '../service'
import formatAsPercentage from '../helpers/formatAsPercentage'

const ModalTicketBody: FC<{ data: MarketTicketData }> = ({ data }) => {
  return (
    <ModalBody>
      <div>
        <CardItem header={'ID:'} data={data.id} />
        <div className={'flex gap-5'}>
          <CardItem header={'highestBid:'} data={data.highestBid} />
          <CardItem
            header={'percentChange:'}
            data={formatAsPercentage(Number(data.percentChange))}
          />
        </div>
        <div className={'flex gap-5'}>
          <CardItem header={'last:'} data={data.last} />
          <CardItem header={'lowestAsk:'} data={data.lowestAsk} />
        </div>
        <div className={'flex gap-5'}>
          <CardItem header={'quoteVolume:'} data={data.quoteVolume} />
          <CardItem header={'baseVolume:'} data={data.baseVolume} />
        </div>
        <div className={'flex gap-5'}>
          <CardItem header={'high24hr:'} data={data.high24hr} />
          <CardItem header={'low24hr:'} data={data.low24hr} />
        </div>
        <div className={'flex gap-5'}>
          <CardItem header={'isFrozen:'} data={Boolean(data.isFrozen).toString()} />
          <CardItem header={'postOnly:'} data={Boolean(data.postOnly).toString()} />
        </div>
      </div>
    </ModalBody>
  )
}
export default ModalTicketBody
