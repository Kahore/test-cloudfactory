import { memo, ReactNode } from 'react'

export const Table = memo(function Table({
  header,
  children,
}: {
  header: ReactNode
  children: ReactNode
}) {
  return (
    <table className={'w-full'}>
      {header}
      {children}
    </table>
  )
})
