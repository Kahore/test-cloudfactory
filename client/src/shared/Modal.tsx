import { FC } from 'react'
import ModalBG from '../ui/ModalBg'
import { ModalProps } from '../hooks/useModal'

const Modal: FC<ModalProps> = ({ ModalHeader, ModalBody, ModalFooter }) => {
  return (
    <div
      id='defaultModal'
      tabIndex={-1}
      aria-hidden='true'
      className='fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center flex'
    >
      <div className='relative w-full h-full max-w-2xl md:h-auto z-50'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          {ModalHeader && ModalHeader}

          {ModalBody && ModalBody}

          {ModalBody && ModalFooter}
        </div>
      </div>
      <ModalBG />
    </div>
  )
}
export default Modal
