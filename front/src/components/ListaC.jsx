import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';



function ListaC({repo}) {
  let [lista, setList] = useState(repo.list());
  repo.inscrever(setList);

  let columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'Nome',
      headerName: 'Nome',
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
  console.log(lista)
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