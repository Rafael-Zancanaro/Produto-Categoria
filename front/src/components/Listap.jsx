import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
function Listap({lista}) {
 
  let columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'Nome',
      headerName: 'Nome',
      width: 150,
      editable: true,
    },
    {
      field: 'Valor',
      headerName: 'Valor',
      width: 150,
      editable: true,
    },
    {
      field: 'Descricao',
      headerName: 'Descrição',
      width: 150,
      editable: true,
    },
  ];

  return (<div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={lista}
      columns={columns}
      pageSize={5}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>);
}
export default Listap;