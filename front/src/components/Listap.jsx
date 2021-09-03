import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';

function Listap({repoProd}) {

  let [ lista, setList] = useState(repoProd.list())
  repoProd.inscrever(setList);

  let columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 150,
      editable: true,
    },
    {
      field: 'valor',
      headerName: 'Valor',
      width: 150,
      editable: true,
    },
    {
      field: 'desc',
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