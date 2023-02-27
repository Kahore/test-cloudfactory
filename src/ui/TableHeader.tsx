import { memo } from 'react'
import { TableHeaderCell } from './TableHeaderCell'
import { TableColumn } from '../shared/Table'

export const TableHeader = memo(function TableHeader({ columns }: { columns: TableColumn[] }) {
  return (
    <thead className={'text-gray-400'}>
      <tr>
        {columns.map((c, index) => (
          <TableHeaderCell key={index + '_' + c.id}>{c.label}</TableHeaderCell>
        ))}
      </tr>
    </thead>
  )
})
