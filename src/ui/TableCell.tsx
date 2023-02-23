import { FC, HTMLAttributes, ReactNode } from 'react'

export const TableCell: FC<{ children: ReactNode } & HTMLAttributes<HTMLTableDataCellElement>> = ({
  children,
  className,
}) => {
  return (
    <td
      className={
        typeof className !== 'undefined' ? ['text-gray-300', className].join(' ') : 'text-gray-300'
      }
    >
      {children}
    </td>
  )
}
