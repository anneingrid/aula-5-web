import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaDetalhes from './paginas/PaginaDetalhes';
import NavBar from './NavBar';


const roteador = createBrowserRouter([
  {path: '/', element: <PaginaInicial/>},
  {path: '/item/:id', element: <PaginaDetalhes/>}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <NavBar></NavBar>
    <RouterProvider router={roteador}></RouterProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
