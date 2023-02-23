import { FC, ReactNode } from 'react'

export const TableHeaderCell: FC<{ children: ReactNode }> = ({ children }) => {
  return <th>{children}</th>
}
