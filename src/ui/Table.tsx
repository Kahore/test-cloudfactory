import { FC, ReactNode } from 'react'

export const Table: FC<{ children: ReactNode }> = ({ children }) => {
  return <table className={'w-full'}>{children}</table>
}
