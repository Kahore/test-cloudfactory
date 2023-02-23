import ModalTicketBody from './ModalTicketBody'
import { useModal } from '../../../hooks/useModal'
import ModalTicketHeader from './ModalTicketHeader'

const ModalTicket = () => {
  const { onToggleModal, RenderModal } = useModal()
  return (
    <RenderModal
      ModalHeader={<ModalTicketHeader ticketName={''} onClose={onToggleModal} />}
      ModalBody={<ModalTicketBody />}
    />
  )
}
export default ModalTicket
