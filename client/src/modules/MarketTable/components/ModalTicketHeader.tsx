import { FC } from 'react'
import ModalHeader from '../../../ui/ModalHeader'

const ModalTicketHeader: FC<{ ticketName: string; onClose(): void }> = ({
  ticketName,
  onClose,
}) => {
  return <ModalHeader header={ticketName} onClose={onClose} />
}
export default ModalTicketHeader
