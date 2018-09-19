import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import * as S from './styles'

export default ({ data, columns, defaultPageSize = data.length }) => {
  return (
    <ReactTable
      data={data}
      filterable
      columns={columns}
      defaultFilterMethod={(filter, row, column) => {
        const id = filter.pivotId || filter.id
        return row[id] !== undefined ? String(row[id]).toLowerCase().search(filter.value.toLowerCase()) > -1 : true
      }}

      defaultSortMethod = {(a, b) => {
        const aa = isNaN(Number(a)) ? a : Number(a)
        const bb = isNaN(Number(b)) ? b : Number(b)
        return aa > bb ? 1 : -1
      }}
    />
  )
}
