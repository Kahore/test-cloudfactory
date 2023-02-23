import { ReactNode, useState } from 'react'
import Modal from '../shared/Modal'

export interface ModalProps {
  ModalHeader?: ReactNode
  ModalBody?: ReactNode
  ModalFooter?: ReactNode
}

export function useModal() {
  const [isClosed, setIsClosed] = useState<boolean>(true)

  const onToggleModal = () => {
    setIsClosed((prevState) => !prevState)
  }

  const RenderModal = (data: ModalProps) => <Modal {...data} />
  return {
    isClosed,
    onToggleModal,
    RenderModal,
  }
}
