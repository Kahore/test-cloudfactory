import { FC, ReactNode } from 'react'

export const TableBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <tbody>{children}</tbody>
}
