import { Button,TextField } from '@material-ui/core';
import Desc from '../model/Desc'
function FormC({create}) {
    let id=1;
    let nome;
    let desc;

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
                if (nome === undefined || nome === "" ||
                    desc === undefined || desc === "") {
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
                    onChange={(e) => nome = e.target.value}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="desc"
                    label="Descrição"
                    onChange = {(e) => desc = e.target.value}
                />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </div>
    );
}
export default FormC;