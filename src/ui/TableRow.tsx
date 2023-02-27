import { memo, ReactNode } from 'react'

export const TableRow = memo(function TableRow({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) {
  return (
    <tr
      className={[
        'h-10',
        'hover:bg-neutral-600',
        'border-b border-gray-200',
        'cursor-pointer',
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </tr>
  )
})
