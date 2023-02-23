import { FC, ReactNode } from 'react'

export const TableHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <thead className={'text-gray-400'}>
      <tr>{children}</tr>
    </thead>
  )
}
