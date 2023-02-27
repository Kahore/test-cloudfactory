import { memo, ReactNode } from 'react'
import { Table } from '../ui/Table'
import { TableHeader } from '../ui/TableHeader'
import { TableBody } from '../ui/TableBody'

export interface TableColumn {
  id: string
  label: string
}

const TableShared = memo(function ableShared({
  columns,
  children,
}: {
  columns: TableColumn[]
  children: ReactNode
}) {
  return (
    <Table header={<TableHeader columns={columns} />}>
      <TableBody>{children}</TableBody>
    </Table>
  )
})
export default TableShared
