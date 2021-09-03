import {Button,TextField} from "@material-ui/core";
import { useState } from "react";
import Pro from "../model/Prod";
function FormP({create}) {
    let id=1;
    let [nome,setnome]=useState("");
    let [valor,setvalor]=useState ("");
    let [desc,setdesc]= useState ("");
    
    return (
        <div>
            <form onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();
                let model;
                model = new Pro(
                    id++,
                    nome,
                    valor,
                    desc);
                if (nome === "" ||
                    valor === ""||
                    desc ==="") {
                    alert("preencha todos os campos!")
                    
                }
                else {
                    create(model);
                    setnome("");
                    setvalor("");
                    setdesc("");
                };
                }}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="nome"
                    label="Nome"
                    onChange={(e) => setnome( e.target.value)}
                    value={nome}/>
                <TextField
                    fullWidth
                    margin="normal"
                    id="valor"
                    label="Valor"
                    type="number"
                    onChange={(e) => setvalor( e.target.value)}
                    value={valor}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="desc"
                    label="Descrição"
                    onChange={(e) => setdesc( e.target.value)}
                    value={desc}
                />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </div>

    );
}
export default FormP;