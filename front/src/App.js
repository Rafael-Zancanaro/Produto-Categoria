import { useState } from 'react';
import './assets/App.css'
import Home from './components/home';
import RepositoryP from './repositorys/repository';
import RepositoryC from './repositorys/repositoryC';
function App (){
  let [repoCat] =useState( new RepositoryC());
  let [repoProd] = useState(new RepositoryP());
    return (
        <Home repo = {repoCat}repoPro ={repoProd} />
    )
}
export default App;