import { FC, ReactNode } from 'react'

const ModalBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='p-6 space-y-6'>{children}</div>
}
export default ModalBody
