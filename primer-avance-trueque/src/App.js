import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import Navbar from './components/Navbar/Navbar';
import Cards from "./components/Card/Cards";
import PlusButton from "./components/PlusButton/PlusButton";
import CustomCheckbox from "./components/Checkbox/Checkbox";
import Login from './components/Login/Login';
import './components/Checkbox/Checkbox.css';
import './App.css';
import JSONDATA from "./MOCK_DATA.json";
import ReactDOM from "react-dom";


<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

=======
function App() {
  
>>>>>>> 5c7363db98efb6936602a6363a470b5877d6785c

function App() {
  const [usuario, setUsuario]=React.useState(null);
  const checkboxes = [
    {
        name: "Libros",
        key: "book"
    },
    {
        name: "Elctronica",
        key: "electronic"
    },
    {
        name: "Culinaria",
        key: "cook"
    },
    {
        name: "Elctronica",
        key: "electronic"
    },
    {
        name: "Culinaria",
        key: "cook"
    }
]
<<<<<<< HEAD
  return <>

    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact>
        <Navbar />
        <div className = "checkbox-container">
          {checkboxes.map(item => (<CustomCheckbox label={item.name} value={item.checkeds} onChange={item.checkeds} />))}
          </div>
          <Cards />
          <PlusButton/>
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
      </div>
    </Router>
  </>;
=======

const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=3cdeded0619b4be6a22a9b621faf9a6c`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <div className="App">
   
      <Navbar />
            <div className = "checkbox-container">
            {checkboxes.map(item => (<CustomCheckbox label={item.name} value={item.checkeds} onChange={item.checkeds} />))}
            </div>
      <Cards />
      <PlusButton/>
      <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
    </div>
    
  );
>>>>>>> 5c7363db98efb6936602a6363a470b5877d6785c
}

export default App;
