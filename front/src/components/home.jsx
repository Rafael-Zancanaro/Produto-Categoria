import * as React from 'react';
import { makeStyles,Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Listap from './Listap';
import ListaC from './ListaC';
import FormP from './FormP'
import FormC from './FormC'
import div from '../assets/Formcss.css'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 700,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Home({repo,repoPro}) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpen1 = () => {
        setOpen1(true);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    };
    const handleOpen3 = () => {
        setOpen3(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
          <FormP create = {repoPro.create.bind(repoPro)}/>
        </div>
      );
      const body1 = (
        <div style={modalStyle} className={classes.paper}>
            <FormC create = {repo.create.bind(repo)}/>
        </div>
      );
      const body2 = (
        <div style={modalStyle} className={classes.paper}>
          <Listap repoProd ={repoPro} />
        </div>
      );
      const body3 = (
        <div style={modalStyle} className={classes.paper}>
          <ListaC repo = {repo}/>
        </div>
      );
    return (
        <div id="div">
          
        <Button variant="outlined" onClick={handleOpen} color="primary">
          Produto
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          {body}
        </Modal>

        <Button variant="outlined" onClick={handleOpen1} color="primary">
          Categoria
        </Button>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          {body1}
        </Modal>

        <Button variant="outlined" onClick={handleOpen2} color="primary">
          Lista Produto
        </Button>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          {body2}
        </Modal>
        
        <Button variant="outlined" type="button" onClick={handleOpen3} color="primary">
          Lista Categoria
        </Button>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body3}
        </Modal>

      </div>
    );
}
export default Home;