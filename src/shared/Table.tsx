import { FC, ReactNode } from 'react'
import { Table } from '../ui/Table'
import { TableHeader } from '../ui/TableHeader'
import { TableBody } from '../ui/TableBody'
import { TableHeaderCell } from '../ui/TableHeaderCell'

export interface TableColumn {
  id: string
  label: string
}

const TableShared: FC<{ columns: TableColumn[]; children: ReactNode }> = ({
  columns,
  children,
}) => {
  return (
    <Table>
      <TableHeader>
        {columns.map((c, index) => (
          <TableHeaderCell key={index + '_' + c.id}>{c.label}</TableHeaderCell>
        ))}
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  )
}
export default TableShared
