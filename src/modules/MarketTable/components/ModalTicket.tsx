import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import ModalTicketBody from './ModalTicketBody'
import ModalTicketHeader from './ModalTicketHeader'
import { useModal } from '../../../hooks/useModal'
import { MarketTicket } from '../service'
import getKey from '../helpers/getKey'
import getKeyValue from '../helpers/getKeyValue'

const ModalTicket: FC<{ ticket: MarketTicket; onClose(): void }> = observer(
  ({ ticket, onClose }) => {
    const { onToggleModal, RenderModal } = useModal()

    const onCloseModal = () => {
      onToggleModal()
      onClose()
    }

    return (
      <RenderModal
        ModalHeader={<ModalTicketHeader ticketName={getKey(ticket)} onClose={onCloseModal} />}
        ModalBody={<ModalTicketBody data={getKeyValue(ticket)} />}
      />
    )
  },
)
export default ModalTicket
