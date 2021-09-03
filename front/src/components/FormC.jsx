import { Button,TextField } from '@material-ui/core';
import { useState } from 'react';
import Desc from '../model/Desc'
function FormC({create}) {
    let id=1;
    let [nome,setnome] = useState("");
    let [desc,setdesc] = useState("");

    return (
        <div>
            <form onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();
                let model;
                model = new Desc(
                    id++,
                    nome,
                    desc);
                if (nome === "" ||
                    desc === "") {
                    alert("preencha todos os campos!")
                }
                else {
                    create(model);
                    setnome("");
                    setdesc("");
                };
                
                }}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="nome"
                    label="Nome"
                    onChange={(e) => {setnome( e.target.value)}}
                    value ={nome}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="desc"
                    label="Descrição"
                    onChange = {(e) => {setdesc ( e.target.value)}}
                    value={desc}
                />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </div>
    );
}
export default FormC;