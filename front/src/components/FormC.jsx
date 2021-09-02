import { Button,TextField } from '@material-ui/core';
import Desc from '../model/Desc'
function FormC({create}) {
    let id;
    let nome;
    let desc;

    return (
        <div>
            <form onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();
                let model;
                model = new Desc(
                    id,
                    nome,
                    desc);
                create(model);
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
export default FormC;