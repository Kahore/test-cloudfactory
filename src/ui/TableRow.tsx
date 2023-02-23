import { FC, ReactNode } from 'react'

export const TableRow: FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => {
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
}
