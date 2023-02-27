import { HTMLAttributes, memo, ReactNode } from 'react'
export const TableCell = memo(function TableCell({
  children,
  className,
}: { children: ReactNode } & HTMLAttributes<HTMLTableDataCellElement>) {
  return (
    <td
      className={
        typeof className !== 'undefined' ? ['text-gray-300', className].join(' ') : 'text-gray-300'
      }
    >
      {children}
    </td>
  )
})
