import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';

function ListaC({repo}) {
  
  let [lista, setList] = useState(repo.list());
  repo.inscrever(setList);

  let columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'nome',
      headerName: 'Nome',
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
export default ListaC;