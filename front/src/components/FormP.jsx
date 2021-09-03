import {Button,TextField} from "@material-ui/core";
import Pro from "../model/Prod";
function FormP({create}) {
    let id=1;
    let nome;
    let valor;
    let desc;
    
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
                if (nome  === undefined || nome === "" ||
                    valor === undefined || valor === ""||
                    desc  === undefined || desc ==="") {
                    alert("preencha todos os campos!")
                    
                }
                else {
                    create(model);
                };
                }}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="nome"
                    label="Nome"
                    onChange={(e) => nome.state = e.target.value}/>
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
            </form>
        </div>

    );
}
export default FormP;