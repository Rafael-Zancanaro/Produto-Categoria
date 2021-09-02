import React from "react";
import {Button,TextField,FormControl,} from "@material-ui/core";
import Pro from "../model/Prod";
function FormP({create}) {
    let id;
    let nome;
    let valor;
    let desc;
    return (
        <div>
            <FormControl onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();
                create(new Pro(
                    id,
                    nome,
                    valor,
                    desc
                ))
            }}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="id"
                    label="Id"
                    type="number"
                    onChange={(e) => id = e.target.value}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="nome"
                    label="Nome"
                    onChange={(e) => nome = e.target.value}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="valor"
                    label="Valor"
                    type="number"
                    onChange={(e) => valor = e.target.value}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="desc"
                    label="Descrição"
                    onChange={(e) => desc = e.target.value}
                />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </FormControl>
        </div>

    );
}
export default FormP;