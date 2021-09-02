import { useState } from 'react';
import './assets/App.css'
import Home from './components/home';
import RepositoryC from './repositorys/repositoryC';
function App (){
  let [repoCat] =useState( new RepositoryC());
    return (
        <Home repo = {repoCat} />
    )
}
export default App;