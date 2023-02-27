import { memo, ReactNode } from 'react'
export const TableHeaderCell = memo(function TableHeaderCell({
  children,
}: {
  children: ReactNode
}) {
  return <th>{children}</th>
})
